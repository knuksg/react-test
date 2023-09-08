import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = ({ width = "100%", height = "100%" }) => {
    const chartRef = useRef(null);

    const [chartOptions, setChartOptions] = useState({
        chart: {
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['', '', '90%', '', '80%', '', '70%', '', '60%', '', '50%', '', '40%', '', '30%', '', '20%', '', '', '상위 5%'], // 퍼센트로 변경
        },
        legend: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Rank',
            data: [5, 10, 15, 20, 25, 30, 35, 36, 38, 40, 36, 40, 35, 30, 25, 20, 15, 10, 5] // "코끼리를 삼킨 보아뱀" 모양의 분포
        },
        {
            name: 'Rank',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            color: '#000000'
        }
    ]);


    useEffect(() => {
        const chartElement = chartRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 차트 애니메이션 재생 로직
                        // 상태를 강제로 변경하여 차트를 다시 렌더링
                        setChartOptions((prevOptions) => ({
                            ...prevOptions,
                            animations: {
                                ...prevOptions.animations,
                                enabled: true,
                            },
                        }));
                    } else {
                        // 차트 애니메이션 중지 및 초기화 로직
                        setChartOptions((prevOptions) => ({
                            ...prevOptions,
                            animations: {
                                ...prevOptions.animations,
                                enabled: false,
                            },
                        }));
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        if (chartElement) {
            observer.observe(chartElement);
        }

        return () => {
            if (chartElement) {
                observer.unobserve(chartElement);
            }
        };
    }, []);

    return (
        // <div ref={chartRef}>
        <ApexCharts options={chartOptions} series={chartSeries} type="bar" width={width}
            height={height} />
        // </div>
    );
};

export default BarChart;
