const circleArea = (r1) => {
    const result = 3.14 * (r1 * r1)
    console.log(result)
}

const circleCircumference = (r2) => {
    const result = 2 * 3.14 * r2
    console.log(result)
}

module.exports = {
    circleArea,
    circleCircumference
}