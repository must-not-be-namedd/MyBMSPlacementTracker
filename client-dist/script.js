// Department Data
const departmentData = {
    'Computer Science & Engineering': {
        students: 162,
        placementRate: 92,
        avgPackage: 25.6,
        highestPackage: 52,
        historicalData: [
            { year: 2014, students: 120, placed: 88, rate: 73, highest: 8.5, avg: 3.8, recruiters: 'TCS, Infosys, Wipro' },
            { year: 2015, students: 125, placed: 94, rate: 75, highest: 12.0, avg: 4.2, recruiters: 'TCS, Infosys, Cognizant' },
            { year: 2016, students: 130, placed: 101, rate: 78, highest: 15.0, avg: 4.8, recruiters: 'TCS, Infosys, Accenture' },
            { year: 2017, students: 135, placed: 109, rate: 81, highest: 18.0, avg: 5.5, recruiters: 'TCS, Infosys, Microsoft' },
            { year: 2018, students: 140, placed: 117, rate: 84, highest: 22.0, avg: 6.2, recruiters: 'TCS, Microsoft, Google' },
            { year: 2019, students: 145, placed: 125, rate: 86, highest: 28.0, avg: 8.1, recruiters: 'Microsoft, Google, Amazon' },
            { year: 2020, students: 150, placed: 129, rate: 86, highest: 32.0, avg: 10.4, recruiters: 'Google, Amazon, Microsoft' },
            { year: 2021, students: 155, placed: 135, rate: 87, highest: 38.0, avg: 13.8, recruiters: 'Google, Amazon, Meta' },
            { year: 2022, students: 158, placed: 139, rate: 88, highest: 42.0, avg: 16.2, recruiters: 'Google, Meta, Amazon' },
            { year: 2023, students: 160, placed: 143, rate: 89, highest: 46.0, avg: 19.5, recruiters: 'Google, Meta, Netflix' },
            { year: 2024, students: 161, placed: 146, rate: 91, highest: 50.0, avg: 22.8, recruiters: 'Google, Meta, Apple' },
            { year: 2025, students: 162, placed: 149, rate: 92, highest: 52.0, avg: 25.6, recruiters: 'Google, Meta, Apple' }
        ]
    },
    'Information Science': {
        students: 132,
        placementRate: 86,
        avgPackage: 22.4,
        highestPackage: 45,
        historicalData: [
            { year: 2014, students: 90, placed: 61, rate: 68, highest: 6.5, avg: 3.2, recruiters: 'TCS, Wipro, Infosys' },
            { year: 2015, students: 95, placed: 66, rate: 69, highest: 8.0, avg: 3.6, recruiters: 'TCS, Wipro, Accenture' },
            { year: 2016, students: 100, placed: 71, rate: 71, highest: 10.0, avg: 4.1, recruiters: 'TCS, Accenture, IBM' },
            { year: 2017, students: 105, placed: 77, rate: 73, highest: 12.5, avg: 4.8, recruiters: 'TCS, IBM, Cognizant' },
            { year: 2018, students: 110, placed: 82, rate: 75, highest: 15.0, avg: 5.4, recruiters: 'IBM, Cognizant, TCS' },
            { year: 2019, students: 115, placed: 87, rate: 76, highest: 18.0, avg: 6.8, recruiters: 'IBM, Cognizant, Microsoft' },
            { year: 2020, students: 120, placed: 92, rate: 77, highest: 22.0, avg: 8.9, recruiters: 'Microsoft, IBM, Amazon' },
            { year: 2021, students: 125, placed: 98, rate: 78, highest: 26.0, avg: 11.2, recruiters: 'Microsoft, Amazon, IBM' },
            { year: 2022, students: 128, placed: 103, rate: 80, highest: 32.0, avg: 14.8, recruiters: 'Microsoft, Amazon, Google' },
            { year: 2023, students: 130, placed: 107, rate: 82, highest: 38.0, avg: 17.6, recruiters: 'Amazon, Google, Microsoft' },
            { year: 2024, students: 131, placed: 111, rate: 85, highest: 42.0, avg: 20.1, recruiters: 'Amazon, Google, Meta' },
            { year: 2025, students: 132, placed: 113, rate: 86, highest: 45.0, avg: 22.4, recruiters: 'Amazon, Google, Meta' }
        ]
    },
    'Electronics and Electrical': {
        students: 142,
        placementRate: 78,
        avgPackage: 20.0,
        highestPackage: 38,
        historicalData: [
            { year: 2014, students: 100, placed: 65, rate: 65, highest: 5.5, avg: 2.8, recruiters: 'Bosch, L&T, TCS' },
            { year: 2015, students: 105, placed: 68, rate: 65, highest: 6.5, avg: 3.1, recruiters: 'Bosch, L&T, Infosys' },
            { year: 2016, students: 110, placed: 73, rate: 66, highest: 7.5, avg: 3.5, recruiters: 'Bosch, Intel, L&T' },
            { year: 2017, students: 115, placed: 78, rate: 68, highest: 9.0, avg: 4.0, recruiters: 'Intel, Bosch, Qualcomm' },
            { year: 2018, students: 120, placed: 83, rate: 69, highest: 11.0, avg: 4.6, recruiters: 'Intel, Qualcomm, Samsung' },
            { year: 2019, students: 125, placed: 88, rate: 70, highest: 14.0, avg: 5.8, recruiters: 'Qualcomm, Samsung, Intel' },
            { year: 2020, students: 130, placed: 93, rate: 72, highest: 18.0, avg: 7.2, recruiters: 'Samsung, Intel, Bosch' },
            { year: 2021, students: 135, placed: 99, rate: 73, highest: 22.0, avg: 9.4, recruiters: 'Samsung, Intel, Apple' },
            { year: 2022, students: 138, placed: 102, rate: 74, highest: 26.0, avg: 12.1, recruiters: 'Apple, Samsung, Intel' },
            { year: 2023, students: 140, placed: 105, rate: 75, highest: 30.0, avg: 15.2, recruiters: 'Apple, Samsung, Google' },
            { year: 2024, students: 141, placed: 108, rate: 77, highest: 34.0, avg: 17.8, recruiters: 'Apple, Google, Samsung' },
            { year: 2025, students: 142, placed: 111, rate: 78, highest: 38.0, avg: 20.0, recruiters: 'Apple, Google, Samsung' }
        ]
    },
    'Mechanical': {
        students: 152,
        placementRate: 71,
        avgPackage: 17.6,
        highestPackage: 32,
        historicalData: [
            { year: 2014, students: 110, placed: 66, rate: 60, highest: 4.5, avg: 2.5, recruiters: 'Mahindra, Tata Motors, BHEL' },
            { year: 2015, students: 115, placed: 70, rate: 61, highest: 5.0, avg: 2.7, recruiters: 'Mahindra, Tata Motors, L&T' },
            { year: 2016, students: 120, placed: 75, rate: 62, highest: 5.8, avg: 3.0, recruiters: 'Tata Motors, L&T, BHEL' },
            { year: 2017, students: 125, placed: 80, rate: 64, highest: 6.8, avg: 3.4, recruiters: 'L&T, BHEL, Ashok Leyland' },
            { year: 2018, students: 130, placed: 85, rate: 65, highest: 8.2, avg: 3.9, recruiters: 'L&T, Ashok Leyland, Mahindra' },
            { year: 2019, students: 135, placed: 90, rate: 67, highest: 10.5, avg: 4.8, recruiters: 'Ashok Leyland, Mahindra, Bosch' },
            { year: 2020, students: 140, placed: 95, rate: 68, highest: 13.0, avg: 6.2, recruiters: 'Mahindra, Bosch, Tata Motors' },
            { year: 2021, students: 145, placed: 100, rate: 69, highest: 16.5, avg: 8.1, recruiters: 'Bosch, Tata Motors, L&T' },
            { year: 2022, students: 148, placed: 103, rate: 70, highest: 20.0, avg: 10.4, recruiters: 'Bosch, L&T, Mahindra' },
            { year: 2023, students: 150, placed: 106, rate: 71, highest: 24.0, avg: 13.2, recruiters: 'L&T, Mahindra, Bosch' },
            { year: 2024, students: 151, placed: 107, rate: 71, highest: 28.0, avg: 15.1, recruiters: 'L&T, Bosch, Tata Motors' },
            { year: 2025, students: 152, placed: 108, rate: 71, highest: 32.0, avg: 17.6, recruiters: 'L&T, Bosch, Tata Motors' }
        ]
    },
    'Civil': {
        students: 137,
        placementRate: 67,
        avgPackage: 16.0,
        highestPackage: 28,
        historicalData: [
            { year: 2014, students: 105, placed: 58, rate: 55, highest: 4.0, avg: 2.2, recruiters: 'L&T, BHEL, Shapoorji' },
            { year: 2015, students: 110, placed: 62, rate: 56, highest: 4.5, avg: 2.4, recruiters: 'L&T, Shapoorji, Godrej' },
            { year: 2016, students: 115, placed: 66, rate: 57, highest: 5.2, avg: 2.7, recruiters: 'Shapoorji, Godrej, L&T' },
            { year: 2017, students: 120, placed: 70, rate: 58, highest: 6.0, avg: 3.1, recruiters: 'Godrej, L&T, Tata Projects' },
            { year: 2018, students: 125, placed: 75, rate: 60, highest: 7.5, avg: 3.6, recruiters: 'L&T, Tata Projects, Godrej' },
            { year: 2019, students: 130, placed: 80, rate: 62, highest: 9.5, avg: 4.4, recruiters: 'Tata Projects, L&T, Simplex' },
            { year: 2020, students: 132, placed: 83, rate: 63, highest: 12.0, avg: 5.8, recruiters: 'L&T, Simplex, Tata Projects' },
            { year: 2021, students: 134, placed: 86, rate: 64, highest: 15.0, avg: 7.2, recruiters: 'Simplex, L&T, Godrej' },
            { year: 2022, students: 135, placed: 88, rate: 65, highest: 18.0, avg: 9.1, recruiters: 'L&T, Godrej, Simplex' },
            { year: 2023, students: 136, placed: 89, rate: 65, highest: 22.0, avg: 11.8, recruiters: 'L&T, Simplex, Tata Projects' },
            { year: 2024, students: 136, placed: 90, rate: 66, highest: 25.0, avg: 14.2, recruiters: 'L&T, Tata Projects, Godrej' },
            { year: 2025, students: 137, placed: 92, rate: 67, highest: 28.0, avg: 16.0, recruiters: 'L&T, Tata Projects, Godrej' }
        ]
    },
    'Biotechnology': {
        students: 102,
        placementRate: 62,
        avgPackage: 14.4,
        highestPackage: 24,
        historicalData: [
            { year: 2014, students: 75, placed: 38, rate: 51, highest: 3.5, avg: 2.0, recruiters: 'Biocon, Dr. Reddys, Cipla' },
            { year: 2015, students: 78, placed: 41, rate: 53, highest: 4.0, avg: 2.2, recruiters: 'Biocon, Cipla, Sun Pharma' },
            { year: 2016, students: 80, placed: 44, rate: 55, highest: 4.8, avg: 2.5, recruiters: 'Cipla, Sun Pharma, Biocon' },
            { year: 2017, students: 85, placed: 47, rate: 55, highest: 5.5, avg: 2.8, recruiters: 'Sun Pharma, Biocon, Lupin' },
            { year: 2018, students: 88, placed: 50, rate: 57, highest: 6.5, avg: 3.2, recruiters: 'Biocon, Lupin, Aurobindo' },
            { year: 2019, students: 90, placed: 53, rate: 59, highest: 8.0, avg: 4.1, recruiters: 'Lupin, Aurobindo, Biocon' },
            { year: 2020, students: 95, placed: 56, rate: 59, highest: 10.0, avg: 5.2, recruiters: 'Aurobindo, Biocon, Glenmark' },
            { year: 2021, students: 98, placed: 59, rate: 60, highest: 12.5, avg: 6.8, recruiters: 'Biocon, Glenmark, Lupin' },
            { year: 2022, students: 100, placed: 61, rate: 61, highest: 15.0, avg: 8.5, recruiters: 'Glenmark, Lupin, Biocon' },
            { year: 2023, students: 101, placed: 62, rate: 61, highest: 18.0, avg: 10.8, recruiters: 'Lupin, Biocon, Aurobindo' },
            { year: 2024, students: 101, placed: 62, rate: 61, highest: 21.0, avg: 12.5, recruiters: 'Biocon, Aurobindo, Glenmark' },
            { year: 2025, students: 102, placed: 63, rate: 62, highest: 24.0, avg: 14.4, recruiters: 'Biocon, Aurobindo, Glenmark' }
        ]
    }
};

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const pages = document.querySelectorAll('.page');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    // Mobile sidebar toggle
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Page navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show target page
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetPage).classList.add('active');
            
            // Close mobile sidebar
            sidebar.classList.remove('active');
            
            // Load page-specific content
            loadPageContent(targetPage);
        });
    });
}

// Load page-specific content
function loadPageContent(page) {
    switch(page) {
        case 'departments':
            loadDepartmentData();
            break;
        case 'resume':
            initializeResumeBuilder();
            break;
        case 'interviews':
            initializeInterviewBooking();
            break;
        default:
            break;
    }
}

// Department page functionality
function loadDepartmentData() {
    const departmentSelect = document.getElementById('departmentSelect');
    const currentDept = departmentSelect.value || 'Computer Science & Engineering';
    
    updateDepartmentMetrics(currentDept);
    updateHistoricalTable(currentDept);
    
    departmentSelect.addEventListener('change', (e) => {
        const selectedDept = e.target.value;
        updateDepartmentMetrics(selectedDept);
        updateHistoricalTable(selectedDept);
    });
}

function updateDepartmentMetrics(department) {
    const data = departmentData[department];
    const metricsContainer = document.getElementById('departmentMetrics');
    
    metricsContainer.innerHTML = `
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-header">
                    <h3>Current Placement Rate</h3>
                    <span class="icon">👥</span>
                </div>
                <div class="metric-value">${data.placementRate}%</div>
                <div class="metric-change">${data.students} total students</div>
            </div>
            <div class="metric-card">
                <div class="metric-header">
                    <h3>Highest Package</h3>
                    <span class="icon">💎</span>
                </div>
                <div class="metric-value">₹${data.highestPackage} LPA</div>
                <div class="metric-change">Best offer this year</div>
            </div>
            <div class="metric-card">
                <div class="metric-header">
                    <h3>Average Package</h3>
                    <span class="icon">🏆</span>
                </div>
                <div class="metric-value">₹${data.avgPackage} LPA</div>
                <div class="metric-change">Across all placements</div>
            </div>
            <div class="metric-card">
                <div class="metric-header">
                    <h3>Students Placed</h3>
                    <span class="icon">📊</span>
                </div>
                <div class="metric-value">${Math.round(data.students * data.placementRate / 100)}</div>
                <div class="metric-change">Out of ${data.students} students</div>
            </div>
        </div>
    `;
}

function updateHistoricalTable(department) {
    const data = departmentData[department];
    const tableBody = document.getElementById('historicalTableBody');
    
    tableBody.innerHTML = data.historicalData.map(year => `
        <tr>
            <td>${year.year}</td>
            <td>${year.students}</td>
            <td>${year.placed}</td>
            <td><span class="rate ${getGradeClass(year.rate)}">${year.rate}%</span></td>
            <td>₹${year.highest} LPA</td>
            <td>₹${year.avg} LPA</td>
            <td>${year.recruiters}</td>
        </tr>
    `).join('');
}

function getGradeClass(rate) {
    if (rate >= 90) return 'excellent';
    if (rate >= 80) return 'very-good';
    if (rate >= 70) return 'good';
    return 'needs-improvement';
}

// Resume builder functionality
function initializeResumeBuilder() {
    const generateBtn = document.getElementById('generateResume');
    const previewDiv = document.getElementById('resumePreview');
    
    generateBtn.addEventListener('click', () => {
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            department: document.getElementById('resumeDepartment').value,
            skills: document.getElementById('skills').value,
            experience: document.getElementById('experience').value
        };
        
        if (validateResumeForm(formData)) {
            generateResumePreview(formData, previewDiv);
        }
    });
}

function validateResumeForm(data) {
    const required = ['fullName', 'email', 'phone', 'department'];
    for (let field of required) {
        if (!data[field]) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            return false;
        }
    }
    return true;
}

function generateResumePreview(data, container) {
    container.innerHTML = `
        <div style="padding: 20px; background: white; border: 1px solid #ddd;">
            <h2 style="color: #333; margin-bottom: 10px;">${data.fullName}</h2>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${data.phone}</p>
            <p style="margin: 5px 0;"><strong>Department:</strong> ${data.department}</p>
            
            ${data.skills ? `
                <h3 style="color: #333; margin-top: 20px; margin-bottom: 10px;">Skills</h3>
                <p>${data.skills}</p>
            ` : ''}
            
            ${data.experience ? `
                <h3 style="color: #333; margin-top: 20px; margin-bottom: 10px;">Experience</h3>
                <p>${data.experience}</p>
            ` : ''}
            
            <button onclick="downloadResume()" style="margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Download PDF
            </button>
        </div>
    `;
}

function downloadResume() {
    alert('Resume download feature would be implemented with a PDF library in a full application');
}

// Interview booking functionality
function initializeInterviewBooking() {
    const bookBtn = document.getElementById('bookInterview');
    
    bookBtn.addEventListener('click', () => {
        const formData = {
            type: document.getElementById('interviewType').value,
            date: document.getElementById('interviewDate').value,
            time: document.getElementById('interviewTime').value,
            requirements: document.getElementById('requirements').value
        };
        
        if (validateInterviewForm(formData)) {
            bookInterview(formData);
        }
    });
}

function validateInterviewForm(data) {
    if (!data.date) {
        alert('Please select a date for the interview');
        return false;
    }
    
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Please select a future date');
        return false;
    }
    
    return true;
}

function bookInterview(data) {
    // Simulate booking process
    const bookingId = 'INT' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    alert(`Interview booked successfully!
    
Booking ID: ${bookingId}
Type: ${data.type}
Date: ${data.date}
Time: ${data.time}

You will receive a confirmation email shortly.`);
    
    // Reset form
    document.getElementById('interviewType').value = 'technical';
    document.getElementById('interviewDate').value = '';
    document.getElementById('interviewTime').value = '09:00';
    document.getElementById('requirements').value = '';
}

// Utility functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    loadDepartmentData(); // Load default department data
});

// Handle window resize for mobile responsiveness
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});

// Close mobile sidebar when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !sidebarToggle.contains(e.target) && 
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading...</div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Add success/error message functionality
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert at the top of the main content
    const mainContent = document.getElementById('mainContent');
    mainContent.insertBefore(messageDiv, mainContent.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Export functions for potential future use
window.BMSCE = {
    loadDepartmentData,
    updateDepartmentMetrics,
    updateHistoricalTable,
    generateResumePreview,
    downloadResume,
    bookInterview,
    showMessage,
    departmentData
};