import { Fallout } from './fallout.model';
import { Resolution } from './resolution.model';

export interface DashboardGet {
    fallouts: Fallout[],
    resolutions: Resolution[],
    totalFallouts: number,
    totalResolutions: number,
    falloutsToday: number,
    resolutionsToday: number,
    barChartDate: {
        falloutsData: {
            month0: number,
            month1: number,
            month2: number,
            month3: number,
            month4: number,
            month5: number,
        },
        resolutionDate: {
            month0: number,
            month1: number,
            month2: number,
            month3: number,
            month4: number,
            month5: number,
        }
    },
    pieChartData: {
        pni: number,
        com: number,
        ordermanager: number
    }
}