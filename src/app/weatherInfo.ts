export class Weather {
    constructor(
        public location: string = '',
        public humidity: number = 0,
        public averageTemperature: number = 0,
        public highTemperature: number = 0,
        public lowTemperature: number = 0,
        public status: string = '',
    ) {}
}