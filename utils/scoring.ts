import { MetricScores, DiagnosticResults, Archetype, Insight } from '../types';
import { CORE_MAPPING, MODIFIER_MAPPING } from '../constants';

export function evaluateMetrics(answers: Record<number, string | number>): MetricScores {
    const metrics: MetricScores = {
        focus: 50,
        structure: 50,
        burnout: 20,
        consistency: 50,
        confidence: 50,
        energy_pattern: 50
    };

    const getAnswer = (id: number) => String(answers[id]);

    // focusScore Logic
    const q8 = getAnswer(8); // Focus Duration
    if (q8 === '45_plus') metrics.focus += 30;
    if (q8 === '25_45') metrics.focus += 10;
    if (q8 === '10_25') metrics.focus -= 20;
    if (q8 === 'less_10') metrics.focus -= 40;

    const q9 = getAnswer(9); // Restlessness
    if (q9 === 'often') metrics.focus -= 20;
    if (q9 === 'rarely' || q9 === 'never') metrics.focus += 10;

    // structureScore Logic
    const q7 = getAnswer(7); // Fixed routine
    if (q7 === 'yes') metrics.structure += 30;
    if (q7 === 'no') metrics.structure -= 30;

    const q16 = getAnswer(16); // Weekly structure
    if (q16 === 'no') metrics.structure += 20;
    if (q16 === 'yes') metrics.structure -= 30;

    // burnoutScore Logic
    const q10 = getAnswer(10); // Mental tiredness
    if (q10 === 'often') metrics.burnout += 40;
    if (q10 === 'sometimes') metrics.burnout += 20;

    const q13 = getAnswer(13); // Extreme hours
    if (q13 === 'yes') metrics.burnout += 30;

    const q3 = getAnswer(3); // Months left
    if (['2_3', '4_6'].includes(q3)) metrics.burnout += 20;

    // consistencyScore Logic
    const q12 = getAnswer(12); // Motivated but inconsistent
    if (q12 === 'yes') metrics.consistency -= 30;
    if (q12 === 'never') metrics.consistency += 20;

    const q11 = getAnswer(11); // Bad day effect
    if (q11 === 'yes') metrics.consistency -= 20;

    // confidenceScore Logic
    const q5 = getAnswer(5);
    if (q5 === 'high') metrics.confidence = 85;
    if (q5 === 'low') metrics.confidence = 30;

    // Energy Pattern
    const q6 = getAnswer(6);
    if (q6 === 'varies') metrics.energy_pattern -= 20;
    else metrics.energy_pattern += 20;

    // Clamp values 0-100
    Object.keys(metrics).forEach(key => {
        metrics[key as keyof MetricScores] = Math.max(0, Math.min(100, metrics[key as keyof MetricScores]));
    });

    return metrics;
}

export function deriveArchetype(metrics: MetricScores): Archetype {
    if (metrics.burnout > 60) {
        return {
            title: "The Burnout Grinder",
            description: "You are putting in effort, but your energy reserves are critically low, leading to diminishing returns."
        };
    }
    if (metrics.structure < 40 && metrics.consistency < 40) {
        return {
            title: "The Unstructured Hardworker",
            description: "You are putting in effort, but your preparation lacks a stable execution framework, making progress feel random."
        };
    }
    if (metrics.focus < 40) {
        return {
            title: "The Fragmented Focus Studier",
            description: "You have the will to study, but external or internal distractions are breaking your deep work cycles."
        };
    }
    if (metrics.consistency < 50) {
        return {
            title: "The Inconsistent Sprinter",
            description: "You have periods of high intensity followed by drops in momentum, preventing long-term compounding of knowledge."
        };
    }
    return {
        title: "The Stable Builder",
        description: "You have a solid foundation, but there are specific optimizations needed to reach peak competitive performance."
    };
}

export function generateInsights(metrics: MetricScores): Insight[] {
    const insights: Insight[] = [];

    if (metrics.focus < 50) {
        insights.push({
            title: "Focus Pattern",
            description: "Your focus cycles appear shorter than the study sessions you attempt.",
            icon: "Zap"
        });
    }

    if (metrics.structure < 50) {
        insights.push({
            title: "Structure Stability",
            description: "Your preparation currently depends on daily motivation rather than a repeatable system.",
            icon: "Target"
        });
    }

    if (metrics.burnout > 50) {
        insights.push({
            title: "Burnout Risk",
            description: "One disrupted study day appears to affect your momentum for multiple days.",
            icon: "AlertCircle"
        });
    }

    if (metrics.consistency < 50) {
        insights.push({
            title: "Energy Pattern",
            description: "Your current schedule might be working against your natural peak focus hours.",
            icon: "Clock"
        });
    }

    return insights.slice(0, 4);
}

export function buildResult(answers: Record<number, string | number>): DiagnosticResults {
    const metrics = evaluateMetrics(answers);
    const archetype = deriveArchetype(metrics);
    const insights = generateInsights(metrics);
    const getAnswer = (id: number) => String(answers[id]);

    // Risk Profile Calculation
    let riskProfile: 'HIGH BURNOUT RISK' | 'MODERATE INSTABILITY' | 'STABLE BUT INEFFICIENT' = 'MODERATE INSTABILITY';
    if (metrics.burnout > 70 || (metrics.burnout > 50 && metrics.consistency < 40)) {
        riskProfile = 'HIGH BURNOUT RISK';
    } else if (metrics.structure > 60 && metrics.focus > 60) {
        riskProfile = 'STABLE BUT INEFFICIENT';
    }

    // Diagnostic Insights Derivation
    const focusPattern = metrics.focus < 40 ? "Low sustained focus" : metrics.focus < 70 ? "Unstable focus" : "High concentration capable";

    const q8 = getAnswer(8);
    let focusRange = "45–90";
    if (q8 === '45_plus') focusRange = "90+";
    if (q8 === '25_45') focusRange = "45–90";
    if (q8 === '10_25') focusRange = "25–45";
    if (q8 === 'less_10') focusRange = "<25";

    const peakQ = getAnswer(6);
    let energyType = "Varies";
    let energyWindow = "Unpredictable hours";
    if (peakQ === 'morning') { energyType = "Early bird"; energyWindow = "5 AM to 9 AM"; }
    if (peakQ === 'night') { energyType = "Night owl"; energyWindow = "9 PM to 1 AM"; }

    const strategyMismatch = "Trying to follow generic routines that don't match your biology";
    const stressResponse = metrics.burnout > 60 ? "Guilt spiral when falling behind" : "High-pressure performance pressure";

    const timeQ = getAnswer(3);
    let timelinePressure = "Limited time remaining before your exam";
    let monthsLeft = "12";
    if (timeQ === '15_plus') { timelinePressure = "Stable preparation timeline"; monthsLeft = "15+"; }
    if (timeQ === '10_12') { timelinePressure = "Moderate timeline pressure"; monthsLeft = "10–12"; }
    if (timeQ === '8_10') { timelinePressure = "Elevated timeline pressure"; monthsLeft = "8–10"; }
    if (timeQ === '4_6') { timelinePressure = "Significant timeline pressure"; monthsLeft = "4–6"; }
    if (timeQ === '2_3') { timelinePressure = "High timeline pressure"; monthsLeft = "2-3"; }
    if (timeQ === '1_month') { timelinePressure = "Critical timeline pressure"; monthsLeft = "1"; }

    const examQ = getAnswer(1);
    let examType = examQ.toUpperCase();
    if (examQ === 'jee_boards') examType = 'JEE + Boards';
    if (examQ === 'neet_boards') examType = 'NEET + Boards';

    // Syllabus remaining
    const feelQ = getAnswer(4);
    let syllabusRemaining = 40;
    if (feelQ === 'ahead') syllabusRemaining = 20;
    if (feelQ === 'on_track') syllabusRemaining = 40;
    if (feelQ === 'behind') syllabusRemaining = 60;
    if (feelQ === 'very_behind') syllabusRemaining = 85;

    // Core Module Friendly Name
    let examKey = getAnswer(1);
    if (examKey === 'jee_boards') examKey = 'jee';
    if (examKey === 'neet_boards') examKey = 'neet';
    const stageKey = getAnswer(2);
    const coreModuleObj = CORE_MAPPING[examKey]?.[stageKey];
    const coreModule = coreModuleObj ? coreModuleObj.title : `${examKey.toUpperCase()} Core System`;
    const assignedCore = `${examKey.toUpperCase()}_${stageKey.toUpperCase()}_CORE`;

    // Modifiers Friendly Names
    const assignedModifiers: string[] = [];
    const modifierTitles: string[] = [];

    Object.entries(answers).forEach(([qId, aId]) => {
        const mod = MODIFIER_MAPPING[Number(qId)]?.[String(aId)];
        if (mod) {
            assignedModifiers.push(mod.id);
            modifierTitles.push(mod.title);
        }
    });

    return {
        metrics,
        archetype,
        insights,
        assignedCore,
        assignedModifiers,
        riskProfile,
        focusPattern,
        focusRange,
        energyType,
        energyWindow,
        strategyMismatch,
        stressResponse,
        timelinePressure,
        monthsLeft,
        examType,
        syllabusRemaining,
        coreModule,
        modifier1: modifierTitles[0] || "Low Focus Modifier",
        modifier2: modifierTitles[1] || "Night Owl Protocol",
        modifier3: modifierTitles[2] || "Burnout Prevention Protocol"
    };
}
