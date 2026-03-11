import { MetricScores, DiagnosticResults, Archetype, Insight } from '../types';
import { CORE_MAPPING, MODIFIER_MAPPING } from '../constants';

export function evaluateMetrics(answers: Record<number, string | number>): MetricScores & { preparationStabilityIndex: number; focusScore: number; burnoutScore: number; structureScore: number } {
    let focusScore = 0;
    let burnoutScore = 0;
    let structureScore = 100; // Starting with a base for structure derivatives
    let internalStructureScore = 0; // The actual structure score 0-100
    let consistencyScore = 50;
    let confidenceScore = 50;

    const getAnswer = (id: number) => String(answers[id]);

    // Focus Score Logic (Q8: How long can you study)
    const q8 = getAnswer(8);
    if (q8 === '45_plus') focusScore = 25;
    else if (q8 === '25_45') focusScore = 10;
    else if (q8 === '10_25') focusScore = -15;
    else if (q8 === 'less_10') focusScore = -30;

    // Burnout Risk Logic (Q9, Q10, Q11, Q12, Q13)
    const burnoutQuestions = [9, 10, 11, 12, 13];
    burnoutQuestions.forEach(qId => {
        const ans = getAnswer(qId);
        if (ans === 'often' || ans === 'yes') burnoutScore += 15;
        else if (ans === 'sometimes') burnoutScore += 8;
        else if (ans === 'rarely') burnoutScore += 2;
        // never -> 0
    });

    // Structure Stability Logic (Q7, Q17, Q14, Q16)
    // q7: routine, q17: revision, q14: abandoned plans, q16: weekly structure
    const q7 = getAnswer(7);
    if (q7 === 'no') internalStructureScore -= 20;
    else if (q7 === 'yes') internalStructureScore += 30;

    const q17 = getAnswer(17);
    if (q17 === 'random') internalStructureScore -= 10;
    else if (q17 === 'rarely') internalStructureScore -= 20;
    else if (q17 === 'systematic') internalStructureScore += 20;

    const q14 = getAnswer(14);
    if (q14 === 'yes') internalStructureScore -= 20;
    else if (q14 === 'few') internalStructureScore -= 10;

    const q16 = getAnswer(16);
    if (q16 === 'yes') internalStructureScore -= 20;

    // Preparation Stability Index
    let psi = 100;
    if (getAnswer(7) === 'no') psi -= 15; // no routine
    if (getAnswer(14) === 'yes') psi -= 15; // abandoned many times
    if (getAnswer(12) === 'yes') psi -= 10; // inconsistency
    if (getAnswer(13) === 'yes') psi -= 10; // extreme hours
    if (getAnswer(17) === 'rarely') psi -= 15; // random/rare revision
    if (getAnswer(11) === 'yes') psi -= 15; // bad days affect multiple

    // confidenceScore Logic
    const q5 = getAnswer(5);
    if (q5 === 'high') confidenceScore = 85;
    else if (q5 === 'low') confidenceScore = 30;

    const metrics = {
        focus: Math.max(0, Math.min(100, focusScore + 50)), // Clamping focus based on a 50 base
        structure: Math.max(0, Math.min(100, internalStructureScore + 50)),
        burnout: Math.max(0, Math.min(100, burnoutScore)),
        consistency: consistencyScore,
        confidence: confidenceScore,
        energy_pattern: 50,
        focusScore: Math.max(0, Math.min(100, focusScore + 50)),
        burnoutScore: Math.max(0, Math.min(100, burnoutScore)),
        structureScore: Math.max(0, Math.min(100, internalStructureScore + 50)),
        preparationStabilityIndex: Math.max(0, Math.min(100, psi))
    };

    return metrics;
}

export function deriveArchetype(metrics: any): Archetype {
    if (metrics.burnoutScore >= 60) {
        return {
            title: "The Burnout Risk",
            description: "High intensity without recovery. You're pushing hard, but your system is on the verge of breakdown."
        };
    }
    if (metrics.structureScore < 40) {
        return {
            title: "The Unstructured Sprinter",
            description: "Lots of effort, zero direction. Your progress is currently limited by the lack of a stable system."
        };
    }
    return {
        title: "The Potential Builder",
        description: "You have the foundation. Now you need the exact system to turn effort into consistent results."
    };
}

export function generateInsights(metrics: any): Insight[] {
    const insights: Insight[] = [];
    if (metrics.burnoutScore >= 60) {
        insights.push({ title: "Burnout Risk", description: "Your energy reserves are low. Focus on recovery before intensity.", icon: "AlertCircle" });
    }
    if (metrics.focusScore < 40) {
        insights.push({ title: "Focus Gap", description: "Your concentration windows are shorter than your study blocks.", icon: "Zap" });
    }
    return insights.slice(0, 4);
}

export function buildResult(answers: Record<number, string | number>): DiagnosticResults {
    const rawMetrics = evaluateMetrics(answers);
    const getAnswer = (id: number) => String(answers[id]);

    // Focus Pattern Conversion
    const fs = rawMetrics.focusScore;
    let focusPattern = "Fragmented focus pattern";
    if (fs >= 60) focusPattern = "High sustained focus (90–120 min capable)";
    else if (fs >= 40) focusPattern = "Moderate focus cycles (60–90 min blocks)";
    else if (fs >= 20) focusPattern = "Low sustained focus (45–90 min blocks)";

    const q8 = getAnswer(8);
    let focusRange = "45–90";
    if (q8 === '45_plus') focusRange = "90+";
    if (q8 === '25_45') focusRange = "45–90";
    if (q8 === '10_25') focusRange = "25–45";
    if (q8 === 'less_10') focusRange = "<25";

    // Energy Pattern Logic (Q6)
    const q6 = getAnswer(6);
    let energyType = "Irregular energy pattern";
    let energyWindow = "Varies throughout the day";
    if (q6 === 'morning') {
        energyType = "Morning focused";
        energyWindow = "5 AM – 9 AM";
    } else if (q6 === 'night') {
        energyType = "Night owl";
        energyWindow = "9 PM – 1 AM";
    }

    // Risk Profile Logic
    const bs = rawMetrics.burnoutScore;
    let riskProfile: 'HIGH BURNOUT RISK' | 'MODERATE INSTABILITY' | 'STABLE BUT INEFFICIENT' = 'MODERATE INSTABILITY';
    if (bs >= 60) riskProfile = 'HIGH BURNOUT RISK';
    else if (bs < 40) riskProfile = 'STABLE BUT INEFFICIENT'; // Using provided 'STABLE BUT FRAGILE' mapping to closest enum

    // Stress Response Logic (Q11)
    const q11 = getAnswer(11);
    let stressResponse = "Stable recovery pattern";
    if (q11 === 'yes') stressResponse = "Guilt spiral when falling behind";
    else if (q11 === 'sometimes') stressResponse = "Momentum disruption after missed days";

    // Strategy Mismatch Logic
    let strategyMismatch = "Using generic study schedules not adapted to your focus pattern";
    if (q6 === 'night' && getAnswer(7) === 'yes') {
        strategyMismatch = "Copying early-morning routines that conflict with your natural energy cycle";
    }

    // Timeline Pressure
    const q3 = getAnswer(3);
    const q1 = getAnswer(1);
    let examType = q1.toUpperCase();
    if (q1 === 'jee_boards') examType = 'JEE + Boards';
    if (q1 === 'neet_boards') examType = 'NEET + Boards';

    let pressure = "Long preparation window";
    if (q3 === '2_3') pressure = "Critical timeline pressure";
    else if (q3 === '4_6') pressure = "High timeline pressure";
    else if (q3 === '8_10') pressure = "Moderate timeline pressure";

    const monthsMap: Record<string, string> = {
        '15_plus': '15+',
        '10_12': '10-12',
        '8_10': '8-10',
        '4_6': '4-6',
        '2_3': '2-3',
        '1_month': '1'
    };
    const timelinePressure = `${pressure}: ${monthsMap[q3] || '?'} months to ${examType}`;

    // Syllabus Remaining
    const feelQ = getAnswer(4);
    let syllabusRemaining = 40;
    if (feelQ === 'ahead') syllabusRemaining = 20;
    if (feelQ === 'on_track') syllabusRemaining = 40;
    if (feelQ === 'behind') syllabusRemaining = 60;
    if (feelQ === 'very_behind') syllabusRemaining = 85;

    // Core & Modifiers
    let examKey = q1;
    if (examKey === 'jee_boards') examKey = 'jee';
    if (examKey === 'neet_boards') examKey = 'neet';
    const stageKey = getAnswer(2);
    const coreModuleObj = CORE_MAPPING[examKey]?.[stageKey];
    const coreModule = coreModuleObj ? coreModuleObj.title : "Veelio Core System";
    const assignedCore = `${examKey.toUpperCase()}_${stageKey.toUpperCase()}_CORE`;

    const modifierTitles: string[] = [];
    Object.entries(answers).forEach(([qId, aId]) => {
        const mod = MODIFIER_MAPPING[Number(qId)]?.[String(aId)];
        if (mod) modifierTitles.push(mod.title);
    });

    return {
        metrics: rawMetrics as MetricScores,
        archetype: deriveArchetype(rawMetrics),
        insights: generateInsights(rawMetrics),
        assignedCore,
        assignedModifiers: [], // Handled by App.tsx logic normally
        riskProfile,
        focusPattern,
        focusRange,
        energyType,
        energyWindow,
        strategyMismatch,
        stressResponse,
        timelinePressure,
        monthsLeft: monthsMap[q3] || '?',
        examType,
        syllabusRemaining,
        preparationStabilityIndex: rawMetrics.preparationStabilityIndex,
        coreModule,
        modifier1: modifierTitles[0] || "Foundational Strategy",
        modifier2: modifierTitles[1] || "Execution Protocol",
        modifier3: modifierTitles[2] || "Consistency Framework"
    };
}
