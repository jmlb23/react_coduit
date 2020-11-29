declare global {
  export interface String {
    parseDate(): Date;
  }

  export interface Date {
    formatDate(format: { day: string, month: string, year: string }): string
  }
}
String.prototype.parseDate = function (this: string) {
  return new Date(this);
};

Date.prototype.formatDate = function (this: Date, format: { day: string, month: string, year: string }) {
  return this.toLocaleString("en", format);
};

export {

}