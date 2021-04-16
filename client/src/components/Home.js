import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
export class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch(`/api/canada`)
            .then(res => res.json())
            .then(findResponse => {
                this.setState({
                    data: [findResponse],
                })
                
            });
    }

    render() {
        var len =0
        var items = []
        var darr = []
        var tc = []
        var tr = []
        var td = []
        var tv = []
        var tvd = []
        var cc = []
        var ch = []
        var cct = []
        var cvd = []
        var cr = []
        var cd = []
        var last_update = ''
        this.state.data.map((item) => {
            item.data.map(i => {
                darr.push(i.date)
            })
        })
        this.state.data.map((item) => {
            last_update = item.last_updated
        })
        

        this.state.data.map((item) => {
            items.push(item.data[darr.length-1].date)
            items.push(item.data[darr.length-2].date)
            items.push(item.data[darr.length-3].date)
            items.push(item.data[darr.length-4].date)
            items.push(item.data[darr.length-5].date)
            items.push(item.data[darr.length-6].date)
            items.push(item.data[darr.length-7].date)
        })
        this.state.data.map((item) => {
            tc.push(item.data[darr.length-1].total_cases)
            tc.push(item.data[darr.length-2].total_cases)
            tc.push(item.data[darr.length-3].total_cases)
            tc.push(item.data[darr.length-4].total_cases)
            tc.push(item.data[darr.length-5].total_cases)
            tc.push(item.data[darr.length-6].total_cases)
            tc.push(item.data[darr.length-7].total_cases)
        })
        this.state.data.map((item) => {
            tr.push(item.data[darr.length-1].total_recoveries)
            tr.push(item.data[darr.length-2].total_recoveries)
            tr.push(item.data[darr.length-3].total_recoveries)
            tr.push(item.data[darr.length-4].total_recoveries)
            tr.push(item.data[darr.length-5].total_recoveries)
            tr.push(item.data[darr.length-6].total_recoveries)
            tr.push(item.data[darr.length-7].total_recoveries)
        })
        
        this.state.data.map((item) => {
            td.push(item.data[darr.length-1].total_fatalities)
            td.push(item.data[darr.length-2].total_fatalities)
            td.push(item.data[darr.length-3].total_fatalities)
            td.push(item.data[darr.length-4].total_fatalities)
            td.push(item.data[darr.length-5].total_fatalities)
            td.push(item.data[darr.length-6].total_fatalities)
            td.push(item.data[darr.length-7].total_fatalities)
        })
        this.state.data.map((item) => {
            tv.push(item.data[darr.length-1].total_vaccinations)
            tv.push(item.data[darr.length-2].total_vaccinations)
            tv.push(item.data[darr.length-3].total_vaccinations)
            tv.push(item.data[darr.length-4].total_vaccinations)
            tv.push(item.data[darr.length-5].total_vaccinations)
            tv.push(item.data[darr.length-6].total_vaccinations)
            tv.push(item.data[darr.length-7].total_vaccinations)
        })
        this.state.data.map((item) => {
            tvd.push(item.data[darr.length-1].total_vaccinated)
            tvd.push(item.data[darr.length-2].total_vaccinated)
            tvd.push(item.data[darr.length-3].total_vaccinated)
            tvd.push(item.data[darr.length-4].total_vaccinated)
            tvd.push(item.data[darr.length-5].total_vaccinated)
            tvd.push(item.data[darr.length-6].total_vaccinated)
            tvd.push(item.data[darr.length-7].total_vaccinated)
        })
        this.state.data.map((item) => {
            cc.push(item.data[darr.length-1].change_cases)
            cc.push(item.data[darr.length-2].change_cases)
            cc.push(item.data[darr.length-3].change_cases)
            cc.push(item.data[darr.length-4].change_cases)
            cc.push(item.data[darr.length-5].change_cases)
            cc.push(item.data[darr.length-6].change_cases)
            cc.push(item.data[darr.length-7].change_cases)
        })
        this.state.data.map((item) => {
            ch.push(item.data[darr.length-1].change_hospitalizations)
            ch.push(item.data[darr.length-2].change_hospitalizations)
            ch.push(item.data[darr.length-3].change_hospitalizations)
            ch.push(item.data[darr.length-4].change_hospitalizations)
            ch.push(item.data[darr.length-5].change_hospitalizations)
            ch.push(item.data[darr.length-6].change_hospitalizations)
            ch.push(item.data[darr.length-7].change_hospitalizations)
        })

        this.state.data.map((item) => {
            cr.push(item.data[darr.length-1].change_recoveries)
            cr.push(item.data[darr.length-2].change_recoveries)
            cr.push(item.data[darr.length-3].change_recoveries)
            cr.push(item.data[darr.length-4].change_recoveries)
            cr.push(item.data[darr.length-5].change_recoveries)
            cr.push(item.data[darr.length-6].change_recoveries)
            cr.push(item.data[darr.length-7].change_recoveries)
        })
        this.state.data.map((item) => {
            cd.push(item.data[darr.length-1].change_fatalities)
            cd.push(item.data[darr.length-2].change_fatalities)
            cd.push(item.data[darr.length-3].change_fatalities)
            cd.push(item.data[darr.length-4].change_fatalities)
            cd.push(item.data[darr.length-5].change_fatalities)
            cd.push(item.data[darr.length-6].change_fatalities)
            cd.push(item.data[darr.length-7].change_fatalities)
        })
        this.state.data.map((item) => {
            cvd.push(item.data[darr.length-1].change_vaccines_distributed)
            cvd.push(item.data[darr.length-2].change_vaccines_distributed)
            cvd.push(item.data[darr.length-3].change_vaccines_distributed)
            cvd.push(item.data[darr.length-4].change_vaccines_distributed)
            cvd.push(item.data[darr.length-5].change_vaccines_distributed)
            cvd.push(item.data[darr.length-6].change_vaccines_distributed)
            cvd.push(item.data[darr.length-7].change_vaccines_distributed)
        })
        this.state.data.map((item) => {
            cct.push(item.data[darr.length-1].change_criticals)
            cct.push(item.data[darr.length-2].change_criticals)
            cct.push(item.data[darr.length-3].change_criticals)
            cct.push(item.data[darr.length-4].change_criticals)
            cct.push(item.data[darr.length-5].change_criticals)
            cct.push(item.data[darr.length-6].change_criticals)
            cct.push(item.data[darr.length-7].change_criticals)
        })
        
        var d1 = items[0]
        var d2 = items[1]
        var d3 = items[2]
        var d4 = items[3]
        var d5 = items[4]
        var d6 = items[5]
        var d7 = items[6]

        var dt7 = Number(td[6])
        var r7 = Number(tr[6])
        var c7 = Number(tc[6])
        var vac7 = Number(tv[6])
        var vacd7 = Number(tvd[6])
        var cc7 = Number(cc[6])
        var chosp7 = Number(ch[6])
        var ccrit7 = Number(cct[6])
        var cvd7 = Number(cvd[6])
        var crec7 = Number(cr[6])
        var cfat7 = Number(cd[6])

        var dt6 = Number(td[5])
        var r6 = Number(tr[5])
        var c6 = Number(tc[5])
        var vac6 = Number(tv[5])
        var vacd6 = Number(tvd[5])
        var cc6 = Number(cc[5])
        var chosp6 = Number(ch[5])
        var ccrit6 = Number(cct[5])
        var cvd6 = Number(cvd[5])
        var crec6 = Number(cr[5])
        var cfat6 = Number(cd[5])

        var dt5 = Number(td[4])
        var r5 = Number(tr[4])
        var c5 = Number(tc[4])
        var vac5 = Number(tv[4])
        var vacd5 = Number(tvd[4])
        var cc5 = Number(cc[4])
        var chosp5 = Number(ch[4])
        var ccrit5 = Number(cct[4])
        var cvd5 = Number(cvd[4])
        var crec5 = Number(cr[4])
        var cfat5 = Number(cd[4])

        var dt4 = Number(td[3])
        var r4 = Number(tr[3])
        var c4 = Number(tc[3])
        var vac4 = Number(tv[3])
        var vacd4 = Number(tvd[3])
        var cc4 = Number(cc[3])
        var chosp4 = Number(ch[3])
        var ccrit4 = Number(cct[3])
        var cvd4 = Number(cvd[3])
        var crec4 = Number(cr[3])
        var cfat4 = Number(cd[3])

        var dt3 = Number(td[2])
        var r3 = Number(tr[2])
        var c3 = Number(tc[2])
        var vac3 = Number(tv[2])
        var vacd3 = Number(tvd[2])
        var cc3 = Number(cc[2])
        var chosp3 = Number(ch[2])
        var ccrit3 = Number(cct[2])
        var cvd3 = Number(cvd[2])
        var crec3 = Number(cr[2])
        var cfat3 = Number(cd[2])

        var dt2 = Number(td[1])
        var r2 = Number(tr[1])
        var c2 = Number(tc[1])
        var vac2 = Number(tv[1])
        var vacd2 = Number(tvd[1])
        var cc2 = Number(cc[1])
        var chosp2 = Number(ch[1])
        var ccrit2 = Number(cct[1])
        var cvd2 = Number(cvd[1])
        var crec2 = Number(cr[1])
        var cfat2 = Number(cd[1])

        var dt1 = Number(td[0])
        var r1 = Number(tr[0])
        var c1 = Number(tc[0])
        var vac1 = Number(tv[0])
        var vacd1 = Number(tvd[0])
        var cc1 = Number(cc[0])
        var chosp1 = Number(ch[0])
        var ccrit1 = Number(cct[0])
        var cvd1 = Number(cvd[0])
        var crec1 = Number(cr[0])
        var cfat1 = Number(cd[0])
        
        return (

            
            <div className = "mainContainer">
                <div class = "sideBar">
                    <div class = "twitterLabel">
                        <h2>News Updates</h2>
                    </div>
                    <div class = "twitterAPI">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="covid_canada"
                            options={{height: 720}}
                        />
                    </div>
                </div>
                <div class = "infoContainer">
                    <div class = "infoTitle">
                        <h2>Canada</h2>
                    </div>
                    <div class = "mainInfo">
                        <div class="chart">
                            <h5>Data Last Updated: {last_update}</h5>
                            <h5>Total Number of Cases as of Today: {c1}</h5>
                            <h5>Total Number of Recoveries as of Today: {r1}</h5>
                            <h5>Total Number of Deaths as of Today: {dt1}</h5>
                            <h5></h5>
                            <h5>Number of New Cases as of Today: {cc1}</h5>
                            <h5>Number of New Hospitalizations as of Today: {chosp1}</h5>
                            <h5>Number of New Deaths as of Today: {cfat1}</h5>
                        </div>
                        
                        <div className = "chart"><h4>Heatmap Of New COVID-19 Cases</h4></div>
                        <div className = "chart">
                            <Chart className = "firstChart"
                                width={'900px'}
                                height={'600px'}
                                chartType="GeoChart"
                                data={[
                                    ['Country', 'Province', 'New Cases'],
                                    ['CA-ON','ON', 4812],
                                    ['CA-NB','NB', 8],
                                    ['CA-BC','BC', 1205], 
                                    ['CA-QC','QC', 1527],
                                    ['CA-NS','NS', 3],
                                    ['CA-MB','MB', 153], 
                                    ['CA-PE','PE', 2],
                                    ['CA-SK','SK', 293],
                                    ['CA-AB','AB', 1646],
                                    ['CA-YT','YT', 1],
                                    ['CA-NT','NT', 1],
                                    ['CA-NL','NL', 2],
                                    ['CA-NU','NU', 12]
                                ]}
                                options={{
                                    
                                    region: 'CA', // Canada
                                    colorAxis: { colors: ['#00853f', 'yellow', '#e31b23'] },
                                    resolution: 'provinces',
                                    backgroundColor: '#E0E0E0',
                                    datalessRegionColor: 'grey',
                                    defaultColor: '#f5f5f5',
                                }}
                                // create .env for key
                                const API_KEY = {process.env.REACT_APP_API_KEY}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                        <br></br>
                        <div className = "chart">
                            <Chart
                                width={'900px'}
                                height={'600px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Canadaian Regions', 'Total Covid Cases'],
                                    ['Ontario', 403571],
                                    ['New Brunswick', 1760],
                                    ['Manitoba', 35688],
                                    ['Yukon', 76],
                                    ['Prince Edward', 167],
                                    ['Nova Scotia', 1786],
                                    ['Alberta', 166177],
                                    ['NewFoundLand', 1036],
                                    ['Nunavut', 396],
                                    ['Saskatchewan', 37384],
                                    ['North West Territories', 7],
                                    ['Quebec',332544],
                                    ['British Columbia', 116075],
                                ]}
                                options={{
                                    title: 'Total COVID-19 Cases per Province',
                                    pieSliceText: 'label',
                                    is3D: true,
                                    backgroundColor: '#E0E0E0',
                                }}
                                rootProps={{ 'data-testid': '2' }}
                            />
                        </div>
                        <br></br>
                        <div className = "chart">
                            <Chart
                                    width={900}
                                    height={600}
                                    chartType="ColumnChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Date','Case','Death','Recoveries'],
                                        [d7, c7,dt7,r7],
                                        [d6, c6,dt6,r6],
                                        [d5, c5,dt5,r5],
                                        [d4, c4,dt4,r4],
                                        [d3, c3,dt3,r3],
                                        [d2, c2,dt2,r2],
                                        [d1, c1,dt1,r1],
                                        
                                    ]}
                                    options={{
                                    backgroundColor: "#E0E0E0",
                                    title: 'Total Cases, Fatalities and Recoveries in the past 7 Days',
                                    chartArea: { width: '50%' },
                                    hAxis: {
                                        title: 'Date',
                                        minValue: 0,
                                    },
                                    vAxis: {
                                        title: " ",
                                    },
                                    }}
                                    legendToggle
                                />
                        </div>
                        <br></br>
                            <div className = "chart">
                                <Chart
                                    width={'900px'}
                                    height={'600px'}
                                    chartType="LineChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['x', 'Cases'],
                                        [d7, c7],
                                        [d6, c6],
                                        [d5, c5],
                                        [d4, c4],
                                        [d3, c3],
                                        [d2, c2],
                                        [d1, c1],
                                        
                                    ]}
                                    options={{
                                        backgroundColor: "#E0E0E0",
                                        title: "Total Cases in the Past 7 Days",
                                        hAxis: {
                                        title: 'Date',
                                        },
                                        vAxis: {
                                        title: 'Cases',
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                            <br></br>
                            <div className = "chart">
                                <Chart
                                    width={'900px'}
                                    height={'600px'}
                                    chartType="LineChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['x', 'Vaccine Supply', 'Vaccinated'],
                                        [d7, vac7, vacd7],
                                        [d6, vac6, vacd6],
                                        [d5, vac5, vacd5],
                                        [d4, vac4, vacd4],
                                        [d3, vac3, vacd3],
                                        [d2, vac2, vacd2],
                                        [d1, vac1, vacd1],
                                        
                                    ]}
                                    options={{
                                        backgroundColor: "#E0E0E0",
                                        title: "Number of vaccines vs vaccinated in the Past 7 Days",
                                        hAxis: {
                                        title: 'Date',
                                        },
                                        vAxis: {
                                        title: 'Total',
                                        },
                                        series: {
                                        1: { curveType: 'function' },
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                            <div className = "chart">
                                <Chart
                                    width={'900px'}
                                    height={'600px'}
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Date', 'Number of New Cases'],
                                        [d7,cc7],
                                        [d6,cc6],
                                        [d5,cc5],
                                        [d4,cc4],
                                        [d3,cc3],
                                        [d2,cc2],
                                        [d1,cc1],
                                    ]}
                                    options={{
                                        backgroundColor: "#E0E0E0",
                                        title: 'Changes in Cases in the Past 7 Days',
                                        chartArea: { width: '50%' },
                                        hAxis: {
                                        title: 'New Cases',
                                        minValue: 0,
                                        },
                                        vAxis: {
                                        title: 'Date',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '1' }}
                                    />
                            </div>
                            <div className = "chart">
                                <Chart
                                    width={'900px'}
                                    height={'600px'}
                                    chartType="SteppedAreaChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Date', 'Hospitalizations', 'Criticals'],
                                        [d7, chosp7, ccrit7],
                                        [d6, chosp6, ccrit6],
                                        [d5, chosp5, ccrit5],
                                        [d4, chosp4, ccrit4],
                                        [d3, chosp3, ccrit3],
                                        [d2, chosp2, ccrit2],
                                        [d1, chosp1, ccrit1],
                                    ]}
                                    options={{
                                        backgroundColor: "#E0E0E0",
                                        title: "Changes in Hospitalizations and Criticals in the Past 7 Days",
                                        vAxis: { title: 'Number of Patients' },
                                        hAxis: { title: 'Date'},
                                        isStacked: true,
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                    />
                                
                            </div>
                            <div className = "chart">
                                <Chart
                                        width={900}
                                        height={600}
                                        chartType="ColumnChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['Date', 'Vaccines Distributed'],
                                            [d7,cvd7],
                                            [d6,cvd6],
                                            [d5,cvd5],
                                            [d4,cvd4],
                                            [d3,cvd3],
                                            [d2,cvd2],
                                            [d1,cvd1],
                                        ]}
                                            
                                        options={{
                                        backgroundColor: "#E0E0E0",
                                        title: 'Vaccines Distributed in the past 7 Days',
                                        chartArea: { width: '50%' },
                                        hAxis: {
                                            title: "Date",
                                            minValue: 0,
                                        },
                                        vAxis: {
                                            title: "Number of Vaccines",
                                        },
                                        }}
                                        legendToggle
                                    />
                            </div>
                            <div className = "chart">
                                <Chart
                                    width={'900px'}
                                    height={'600px'}
                                    chartType="AreaChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Date', 'Hospitalizations', 'Recoveries'],
                                        [d7, chosp7, crec7],
                                        [d6, chosp6, crec6],
                                        [d5, chosp5, crec5],
                                        [d4, chosp4, crec4],
                                        [d3, chosp3, crec3],
                                        [d2, chosp2, crec2],
                                        [d1, chosp1, crec1],
                                    ]}
                                    options={{
                                        backgroundColor: "#E0E0E0",
                                        title: 'Hospitalizations vs. Recoveries',
                                        hAxis: { title: 'Date', titleTextStyle: { color: '#333' } },
                                        vAxis: { minValue: 0 },
                                        // For the legend to fit, we make the chart area smaller
                                        chartArea: { width: '50%', height: '70%' },
                                    }}
                
                                   rootProps={{ 'data-testid': '1' }}
                                    />
                            </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Home;