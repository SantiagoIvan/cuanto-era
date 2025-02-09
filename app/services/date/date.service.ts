import moment from "moment";

export const DateService = {

    /**
     * Rango de días para obtener el promedio del dólar informal.
     * @type {number}
     */
    DAYS_RANGE: 5,

    /**
     * Fecha mínima para obtener el promedio del dólar informal.
     * @type {string}
     */
    MIN_DATE: "01-01-2003",

  /**
   * Valida si una fecha es válida y posterior a la fecha mínima.
   * @param {string} date - Fecha en formato DD-MM-YYYY.
   * @returns {boolean} true si la fecha es válida y posterior a la fecha mínima, false en caso contrario.
   */
  validateDate: (date: string): boolean => {
    const dateMoment = moment(date, 'DD-MM-YYYY');
    const minDate = moment(DateService.MIN_DATE, 'DD-MM-YYYY');
    return dateMoment.isValid() && dateMoment.isSameOrAfter(minDate);
  },



  /**
   * Obtiene la fecha actual en formato DD-MM-YYYY.

   * @returns {string} Fecha actual en formato DD-MM-YYYY.
   */
  getCurrentDate: (): string => moment().format('DD-MM-YYYY'),


  /**
   * Obtiene el rango de días para una fecha específica.
   * @param {string} date - Fecha en formato DD-MM-YYYY.
   * @returns {Object} Objeto con las fechas de inicio y fin.
   */
  getRangeOfDays: (date: string): { from: string, to: string } => {
    const dateMoment = moment(date, 'DD-MM-YYYY');
    const from = dateMoment.subtract(DateService.DAYS_RANGE, 'days').format('DD-MM-YYYY');
    const to = dateMoment.add(DateService.DAYS_RANGE, 'days').format('DD-MM-YYYY');
    return { from, to };


  }
}


