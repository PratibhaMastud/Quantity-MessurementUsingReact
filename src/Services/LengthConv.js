class LengthConv {

    calculateLength(value, from, to) {
        if (value == null || from == null || to == null) {
            return null;
        }
        var inch =0;
        switch (to) {
            case 1:
                this.inch = value * from;
                return this.inch;

            case 2:
                this.inch = value * from;
                return this.inch;
            case 3:
                this.inch = value * from;
                return this.inch;
            case 4:
                this.inch = value * from;
                return this.inch;
            case 5:
                this.inch= value * from;
                return this.inch;
            case 6:
               this.inch = value * from;
                return this.inch;
            case 7:
                this.inch = value * from;
                return this.inch;
            default:
            return null;
        }
    }
}
export default LengthConv; 