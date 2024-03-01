import { differenceInDays, format } from "date-fns";

export const getDaysLeft = (dt) => {
    if (!dt) return "";

    let diff = differenceInDays(dt, new Date());
    diff++;
    const unit = (diff === 1) ? 'day' : 'days';
    const result = (diff <= 0) ? 'Expired' : `${diff} ${unit} left`
    return result;
}

const DEFAULT_DATE_FORMAT = "dd-MMM, yyyy";

export const getDefaultDateFormat = (dt) => {
    if (!dt) return "";

    const result = format(dt, DEFAULT_DATE_FORMAT);
    return result;
}