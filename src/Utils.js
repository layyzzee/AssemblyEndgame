import { words } from "./words"

export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export function getDailyWord() {
    const startDate = Date.UTC(2026, 0, 1)
    const today = new Date()
    const todayUTC = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
    )
    const difference = todayUTC - startDate
    const daysPassed = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    )
    const index = daysPassed % words.length
    return words[index]
}