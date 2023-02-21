interface WeatherData {}

function _getApiKey(): string {
    const result = process.env["API_KEY"];
    console.log(result);
    if (result)
        return result;
    throw new Error("Set the API_KEY enviroment variable to the value of your OpenWeather API key!");
}

async function _fetchWeather(): Promise<WeatherData | null> {
    let api_key = _getApiKey();
    const result: object | null = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${api_key}`
    ).then((response) => {
        return response.json();
    }).catch((error) => {
        console.log(`Error: ${error}`);
        return null;
    });
    return result;
}

function getDay(): void {
    console.log("Getting day...");
}

export { _fetchWeather };
