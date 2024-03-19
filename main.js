function calculateSalary() {
    const salaryType = document.getElementById("salaryType").value;
    const salaryAmount = parseFloat(document.getElementById("salaryAmount").value);
    const hoursPerWeek = parseFloat(document.getElementById("hoursPerWeek").value);

    let calculatedSalary = 0;

    switch (salaryType) {
        case "monthly":
            calculatedSalary = salaryAmount / 12;
            break;
        case "biweekly":
            calculatedSalary = salaryAmount / 26;
            break;
        case "weekly":
            calculatedSalary = salaryAmount / 52;
            break;
        case "daily":
            calculatedSalary = salaryAmount / (52 * 5); // Assuming 5 working days per week
            break;
        case "hourly":
            calculatedSalary = salaryAmount * hoursPerWeek * 52; // Assuming 52 working weeks per year
            break;
        default:
            break;
    }

    document.getElementById("result").innerText = `Calculated Salary: $${calculatedSalary.toFixed(2)}`;
}
 
