function sortItems(items, index) {
    return items.map(i => i[index]).sort((a, b) => a - b)
}

function calcMinRooms(intervals, orderedStartValues, orderedEndValues) {
    let startPointer = 0
    let endPointer = 0
    let rooms = 0
    let minRooms = 0
    while(startPointer < intervals.length) {
        if (!intervals[startPointer].length) {
            startPointer++
        } else if(orderedStartValues[startPointer] <= orderedEndValues[endPointer]) {
            rooms++
            startPointer++
        } else if (orderedStartValues[startPointer] >= orderedEndValues[endPointer]) {
            rooms--
            endPointer++
        } else {
            startPointer++
        }
    }

    return rooms
}

function minRooms (intervals) {
    if (!intervals.length) {
        return 0
    }
    
    const orderedStartValues = sortItems(intervals, 0)
    const orderedEndValues = sortItems(intervals, 1)

    return calcMinRooms(intervals, orderedStartValues, orderedEndValues)
}

function testIntervals() {
    const test = [
        {
            values: [[0, 30], [15, 20], [5, 10]],
            expected: 2
        },
        {
            values: [],
            expected: 0
        },
        {
            values: [[5 ,15]],
            expected: 1
        }
    ]

    let success = 0
    test.map(i => {
        const result = minRooms(i.values)
        console.assert(result === i.expected, '', i.values)
        if (result === i.expected) success++
    })

    console.log(success, 'tests with success')
}

testIntervals()