const leaveTypes = ["Sick Leave", "Casual Leave", "Vacation", "Quitting", "Other"];
const areaCodes = ["+1", "+44", "+91", "+61", "+81"];

// Function to populate leave type options
function populateLeaveTypes() {
    const leaveTypeSelect = document.getElementById('leaveType');
    leaveTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        leaveTypeSelect.appendChild(option);
    });
}

// Function to populate area code options
function populateAreaCode() {
    const areaCodeSelect = document.getElementById('areaCode');
    areaCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = code;
        areaCodeSelect.appendChild(option);
    });
}

// Function to validate the form dates
function validateDates(startDate, endDate) {
    if (new Date(endDate) < new Date(startDate)) {
        alert('End date cannot be before the start date!');
        return false;
    }
    return true;
}

// Event listeners to populate options when the page loads
document.addEventListener('DOMContentLoaded', populateLeaveTypes);
document.addEventListener('DOMContentLoaded', populateAreaCode);

// Get radio buttons and input sections
const daysRadio = document.getElementById('days');
const hoursRadio = document.getElementById('hours');

const daysSection = document.getElementById('days-section');
const daysSectionEnd = document.getElementById('days-section-end');
const hoursSection = document.getElementById('hours-section');
const hoursSectionEnd = document.getElementById('hours-section-end');

// Add event listeners to toggle between days and hours
daysRadio.addEventListener('change', function() {
  if (this.checked) {
    daysSection.style.display = 'block';
    daysSectionEnd.style.display = 'block';
    hoursSection.style.display = 'none';
    hoursSectionEnd.style.display = 'none';
  }
});

hoursRadio.addEventListener('change', function() {
  if (this.checked) {
    daysSection.style.display = 'none';
    daysSectionEnd.style.display = 'none';
    hoursSection.style.display = 'block';
    hoursSectionEnd.style.display = 'block';
  }
});

// Form submission event listener
document.getElementById('leaveRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankyou').style.display = 'block';
    document.getElementById('form-container').style.display = 'none';
    this.reset(); 
});