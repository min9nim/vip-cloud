import { scaleOrdinal } from "d3-scale"
import { schemeCategory10 } from "d3-scale-chromatic"
import { range } from "d3-array"

export default function getDefaultColors() {
    return range(20)
        .map(number => number.toString())
        .map(scaleOrdinal(schemeCategory10))
}
