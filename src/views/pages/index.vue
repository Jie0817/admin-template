<template>
    <div class="index">
        <div id="myMap" :style="{ width: '100%', height: '600px' }"></div>
    </div>
</template>

<script lang="ts">
    import * as echarts from "echarts";
    import http from '@/utils/axios/http'
    // import echarts3D from './echarts3D'
    // import mapData from './map'
    import { defineComponent,onMounted, onUnmounted, ref, computed } from 'vue'

    const myMap = function(){
        onMounted(() => {
            initChart();
        });
        onUnmounted(() => {
            echarts.dispose;
        });
        // 基础配置一下Echarts
        const initChart = () => {
            type EChartsOption = echarts.EChartsOption;
            let option:EChartsOption;
            var chartDom = document.getElementById('myMap')!;
            var myChart = echarts.init(chartDom);
            http.get('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json',{}).then(res => {
                run(res.data)
            })
           function run(_rawData: any) {
                const countries = [
                    'Finland',
                    'France',
                    'Germany',
                    'Iceland',
                    'Norway',
                    'Poland',
                    'Russia',
                    'United Kingdom'
                ];
                const datasetWithFilters: echarts.DatasetComponentOption[] = [];
                const seriesList: echarts.SeriesOption[] = [];
                echarts.util.each(countries, function (country) {
                    var datasetId = 'dataset_' + country;
                    datasetWithFilters.push({
                    id: datasetId,
                    fromDatasetId: 'dataset_raw',
                    transform: {
                        type: 'filter',
                        config: {
                        and: [
                            { dimension: 'Year', gte: 1950 },
                            { dimension: 'Country', '=': country }
                        ]
                        }
                    }
                    });
                    seriesList.push({
                    type: 'line',
                    datasetId: datasetId,
                    showSymbol: false,
                    name: country,
                    endLabel: {
                        show: true,
                        formatter: function (params: any) {
                        return params.value[3] + ': ' + params.value[0];
                        }
                    },
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    encode: {
                        x: 'Year',
                        y: 'Income',
                        label: ['Country', 'Income'],
                        itemName: 'Year',
                        tooltip: ['Income']
                    }
                    });
                });

                option = {
                    animationDuration: 10000,
                    dataset: [
                    {
                        id: 'dataset_raw',
                        source: _rawData
                    },
                    ...datasetWithFilters
                    ],
                    title: {
                    text: 'Income of Germany and France since 1950'
                    },
                    tooltip: {
                    order: 'valueDesc',
                    trigger: 'axis'
                    },
                    xAxis: {
                    type: 'category',
                    nameLocation: 'middle'
                    },
                    yAxis: {
                    name: 'Income'
                    },
                    grid: {
                    right: 140
                    },
                    series: seriesList
                };

                myChart.setOption(option);
                }
        }
    }

    export default defineComponent({
        name: "echartsBox",
        setup() {
            myMap();
        }
    });
</script>

<style lang="scss" scoped>

</style>