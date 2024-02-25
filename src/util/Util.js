import { differenceInDays } from "date-fns";

export const getDaysLeft = (dt) => {
    if (!dt) return "";

    let diff = differenceInDays(dt, new Date());
    diff++;
    const unit = (diff === 1) ? 'day' : 'days';
    const result = (diff <= 0) ? 'Expired' : `${diff} ${unit} left`
    return result;
}