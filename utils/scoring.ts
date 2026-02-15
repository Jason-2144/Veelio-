export interface ProfileScores {
    consistency: number;
    energyStability: number;
    focusControl: number;
    burnout: number;
    avoidance: number;
    systemMaturity: number;
    potential: number;
}

export interface ProfileResults {
    burnoutLevel: 'Low' | 'Medium' | 'High';
    mainDifficulty: string;
    peakEnergy: string;
    focusType: string;
    potential: string;
}

export function evaluateStudyProfile(answers: Record<number, string | number>): ProfileScores {
    let scores = {
        consistency: 0,
        energyStability: 0,
        focusControl: 0,
        burnout: 0,
        avoidance: 0,
        systemMaturity: 0,
        potential: 0
    };

    const getAnswer = (id: number) => answers[id] as string;

    // Q1 – Exam
    const q1 = getAnswer(1);
    if (["jee", "neet"].includes(q1)) scores.potential += 2;
    if (q1.includes("_boards")) scores.burnout += 2;

    // Q2 – Stage
    const q2 = getAnswer(2);
    if (q2 === "dropper") {
        scores.burnout += 2;
        scores.potential += 2;
    }
    if (q2 === "revision") scores.burnout += 3;

    // Q3 – Months left
    const q3 = getAnswer(3);
    const monthsMap: Record<string, number> = {
        "15_plus": 0,
        "10_12": 1,
        "8_10": 2,
        "4_6": 3,
        "2_3": 4
    };
    scores.burnout += monthsMap[q3] || 0;

    // Q4 – Prep feeling
    const q4 = getAnswer(4);
    if (q4 === "ahead") scores.consistency += 2;
    if (q4 === "on_track") scores.consistency += 1;
    if (q4 === "behind") scores.burnout += 1;
    if (q4 === "very_behind") {
        scores.burnout += 3;
        scores.avoidance += 2;
    }

    // Q5 – Confidence
    const q5 = getAnswer(5);
    if (q5 === "high") scores.potential += 2;
    if (q5 === "moderate") scores.potential += 1;
    if (q5 === "low") {
        scores.burnout += 2;
        scores.avoidance += 1;
    }

    // Q6 – Focus timing
    const q6 = getAnswer(6);
    if (q6 === "varies") scores.energyStability -= 2;
    else scores.energyStability += 1;

    // Q7 – Fixed routine
    const q7 = getAnswer(7);
    if (q7 === "yes") scores.consistency += 3;
    if (q7 === "somewhat") scores.consistency += 1;
    if (q7 === "no") scores.consistency -= 3;

    // Q8 – Focus duration
    const q8 = getAnswer(8);
    const focusMap: Record<string, number> = {
        "45_plus": 3,
        "25_45": 1,
        "10_25": -1,
        "less_10": -3
    };
    scores.focusControl += focusMap[q8] || 0;

    // Q9 – Restlessness
    const q9 = getAnswer(9);
    const restlessMap: Record<string, number> = {
        "often": -3,
        "sometimes": -1,
        "rarely": 1,
        "never": 2
    };
    scores.focusControl += restlessMap[q9] || 0;

    // Q10 – Mental tiredness
    const q10 = getAnswer(10);
    const tiredMap: Record<string, number> = {
        "often": 3,
        "sometimes": 1,
        "rarely": -1,
        "never": -2
    };
    scores.burnout += tiredMap[q10] || 0;

    // Q11 – Bad day cascade
    const q11 = getAnswer(11);
    const cascadeMap: Record<string, number> = {
        "yes": -3,
        "sometimes": -1,
        "rarely": 1,
        "never": 2
    };
    scores.consistency += cascadeMap[q11] || 0;

    // Q12 – Motivated but inconsistent
    const q12 = getAnswer(12);
    if (q12 === "yes") {
        scores.consistency -= 3;
        scores.potential += 1;
    }
    if (q12 === "sometimes") scores.consistency -= 1;
    if (q12 === "rarely") scores.consistency += 1;
    if (q12 === "never") scores.consistency += 2;

    // Q13 – Extreme hours
    const q13 = getAnswer(13);
    const extremeMap: Record<string, number> = {
        "yes": 3,
        "sometimes": 1,
        "rarely": -1,
        "never": -2
    };
    scores.burnout += extremeMap[q13] || 0;

    // Q14 – Abandoned plans
    const q14 = getAnswer(14);
    const abandonMap: Record<string, number> = {
        "yes": -3,
        "few": -1,
        "rarely": 1,
        "never": 2
    };
    scores.systemMaturity += abandonMap[q14] || 0;

    // Q15 – Overstudy favorites
    const q15 = getAnswer(15);
    const overMap: Record<string, number> = {
        "yes": 3,
        "sometimes": 1,
        "rarely": -1,
        "never": -2
    };
    scores.avoidance += overMap[q15] || 0;

    // Q16 – Weekly structure
    const q16 = getAnswer(16);
    if (q16 === "yes") scores.systemMaturity -= 3; // Note: Logic seems inverted in user request ("Study daily without structure" -> "Yes" means low maturity). Correct.
    if (q16 === "sometimes") scores.systemMaturity -= 1;
    if (q16 === "no") scores.systemMaturity += 2;

    // Q17 – Revision
    const q17 = getAnswer(17);
    if (q17 === "systematic") scores.systemMaturity += 3;
    if (q17 === "random") scores.systemMaturity -= 1;
    if (q17 === "rarely") scores.burnout += 2;

    // Q18 – Avoid tests
    const q18 = getAnswer(18);
    const testMap: Record<string, number> = {
        "yes": 3,
        "sometimes": 1,
        "rarely": -1,
        "never": -2
    };
    scores.avoidance += testMap[q18] || 0;

    // Q19 – System >2 weeks
    const q19 = getAnswer(19);
    if (q19 === "yes") scores.systemMaturity += 3;
    if (q19 === "no") scores.systemMaturity -= 2;
    if (q19 === "unsure") scores.systemMaturity -= 1;

    // Q20 – Adapted to bad days
    const q20 = getAnswer(20);
    if (q20 === "yes") scores.systemMaturity += 3;
    if (q20 === "somewhat") scores.systemMaturity += 1;
    if (q20 === "no") scores.systemMaturity -= 2;
    if (q20 === "none") scores.systemMaturity -= 3;

    // Q21 – Will follow on bad days
    const q21 = getAnswer(21);
    if (q21 === "yes") scores.potential += 2;
    if (q21 === "maybe") scores.potential += 1;
    if (q21 === "no") scores.potential -= 2;

    // Q22 – Preference
    const q22 = getAnswer(22);
    if (q22 === "fixed") scores.energyStability += 1;
    if (q22 === "flexible") {
        scores.energyStability -= 2;
        scores.systemMaturity += 2;
    }

    // Q23 – Athlete
    const q23 = getAnswer(23);
    if (q23 === "yes") {
        scores.burnout += 1;
        scores.energyStability += 1;
    }

    return scores;
}

export function deriveResults(scores: ProfileScores): ProfileResults {
    const burnoutLevel =
        scores.burnout <= 3 ? "Low" :
            scores.burnout <= 7 ? "Medium" : "High";

    let mainDifficulty = "Consistency";
    if (scores.avoidance >= 3) mainDifficulty = "Avoidance";
    if (scores.focusControl <= -2) mainDifficulty = "Focus";
    if (scores.burnout >= 8) mainDifficulty = "Burnout";

    const peakEnergy =
        scores.energyStability >= 2 ? "Stable" :
            scores.energyStability <= -2 ? "Highly Variable" : "Variable";

    const focusType =
        scores.focusControl >= 3 ? "Deep" :
            scores.focusControl < 0 ? "Fragmented" : "Standard";

    const potential =
        scores.potential >= 5 ? "Top 1%" :
            scores.potential >= 3 ? "High" :
                scores.potential >= 1 ? "Above Average" : "Underutilized";

    return {
        burnoutLevel,
        mainDifficulty,
        peakEnergy,
        focusType,
        potential
    };
}
