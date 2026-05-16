# Minimum number of meeting rooms

## Objective
To show the minimum number of meeting rooms required for the schedule.

One meeting cannot overwrite another.


## Examples
format [[start, end], [start, end]...]
````
[[0, 30], [5, 10], [15, 20]]

expected 2
````

Why?

0, 30 -> use a room
5, 10 -> this meeting starts before the previous meeting
15, 20 -> starts after the previous meeting, so you can use the same room