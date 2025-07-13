var findMinArrowShots = function(points) {
    //problem definition : return the minimum number of arrows that must be shot to burst all balloon. => greedy
    // each point represented as start, end

    if(points.length === 0) return 0;

    points.sort((a,b) => a[1] - b[1]) // smallest to biggest 

    let arrows = 1 // at least one group 
    let arrows_positon = points[0][1]// at least one group shoot the arrows position

    for (const point of points){
        if (arrows_positon > point[0]){ //
            arrows ++
            arrows_positon = point[1]
        }
    }
    return arrows;

}