export interface INavBarItems {
    code:string;
    route:string;
    hasRoute:boolean;
    isCurrentPage: boolean;
    navBarChilds: INavBarItems[]
};

//Interfaces can be extended from/by classes and are best for when you are defining properties.
//Types can be combined and should be used more for non-composite properties. A good example would be to use types for something like this:

/*
Type
type DonutChartModel = {
    dimension: number;
    innerRadius: number;
};
var donut: DonutChartModel = {
    dimension: 1,
    innerRadius: 2
};
Interface
interface IDonutChartModel {
    dimension: number;
    innerRadius: number;
}
var donut: IDonutChartModel = {
    dimension: 1,
    innerRadius: 2
};
When to Use:
Interfaces can be extended from/by classes and are best for when you are defining properties.

Types can be combined and should be used more for non-composite properties. A good example would be to use types for something like this:

type Direction = 'up' | 'down' | 'left' | 'right';
 */