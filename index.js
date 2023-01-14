function getHighProfit(listJob) {
    let totalJob = listJob[0]
    let totalProfit = 0
    for(let i = 1; i <= totalJob; i++) {
        totalProfit += listJob[i*3]
    }

    let i_start, i_end, i_profit, i_job = 0
    let start_time, end_time, profit = 0
    for(let i = 1; i <= totalJob; i++) {
        if(i == 1) {
            i_start = 1
            i_end = 2
            i_profit = 3

            start_time = listJob[i_start]
            end_time = listJob[i_end]
            profit = listJob[i_profit]
            i_job += 1
        } else {
            i_start = i_start+3
            i_end = i_end+3
            i_profit = i_profit+3

            if(profit < listJob[i_profit]) {
                start_time = listJob[i_start]
                end_time = listJob[i_end]
                profit = listJob[i_profit]
                i_job = 1
            } else {
                if(start_time <= listJob[i_start] && end_time >= listJob[i_end]) {
                    start_time = listJob[i_start]
                    end_time = listJob[i_end]
                } else {
                    start_time = listJob[i_start]
                    end_time = listJob[i_end]
                    profit += listJob[i_profit]
                    i_job += 1
                }
            }
        }
    }
    console.log(totalJob-i_job)
    console.log(totalProfit-profit)
}

// Input
let listJob = [3, 0900, 1030, 100, 1000, 1200, 500, 1100, 1200, 300]
// let listJob = [5, 0805, 0830, 100, 0835, 0900, 100, 0905, 0930, 100, 0935, 1000, 100, 1005, 1030, 100]

getHighProfit(listJob)