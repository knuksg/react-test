import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'react-apexcharts';

const LineChart = ({ width = "100%", height = "100%" }) => {
    const chartRef = useRef(null);

    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "basic-line",
            toolbar: {
                show: false,
                tools: {
                    download: false
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
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
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
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
        <ApexCharts options={chartOptions} series={chartSeries} type="line" width={width}
            height={height} />
        // </div>
    );
};

export default LineChart;
