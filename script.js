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

// Login functionality
function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginPage = document.getElementById('loginPage');
    const mainContent = document.getElementById('mainContent');
    
    // Check if user is already logged in
    if (localStorage.getItem('bmsce-user')) {
        showMainApp();
    }
    
    // Initialize auth tabs
    initializeAuthTabs();
    
    // Handle sign in form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation - accept any email and password for demo
        if (email.trim() && password.trim()) {
            // Store user data
            const userData = {
                email: email.trim(),
                loginTime: new Date().toISOString(),
                type: 'signin'
            };
            
            localStorage.setItem('bmsce-user', JSON.stringify(userData));
            showMessage('Login successful! Redirecting...', 'success');
            
            // Show success animation and transition to main app
            showLoginSuccess();
        } else {
            showMessage('Please fill in all fields', 'error');
        }
    });
    
    // Handle sign up form
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const department = document.getElementById('signupDepartment').value;
        const year = document.getElementById('signupYear').value;
        
        // Simple validation - accept any filled fields for demo
        if (name.trim() && email.trim() && password.trim() && department && year) {
            // Store user data
            const userData = {
                name: name.trim(),
                email: email.trim(),
                department: department,
                year: year,
                loginTime: new Date().toISOString(),
                type: 'signup'
            };
            
            localStorage.setItem('bmsce-user', JSON.stringify(userData));
            showMessage('Account created successfully! Redirecting...', 'success');
            
            // Show success animation and transition to main app
            showSignupSuccess();
        } else {
            showMessage('Please fill in all fields', 'error');
        }
    });
    
    function initializeAuthTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetTab = button.dataset.tab;
                
                // Remove active class from all tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab
                button.classList.add('active');
                document.getElementById(targetTab + 'Tab').classList.add('active');
            });
        });
    }
    
    function showLoginSuccess() {
        const loginLeft = document.querySelector('.login-left');
        loginLeft.style.transform = 'scale(1.05)';
        loginLeft.style.background = 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)';
        loginLeft.style.color = 'white';
        
        setTimeout(() => {
            loginLeft.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
                    <h2>Welcome Back!</h2>
                    <p>Redirecting to dashboard...</p>
                </div>
            `;
            
            // Redirect to main app after brief delay
            setTimeout(() => {
                showMainApp();
            }, 1500);
        }, 500);
    }
    
    function showSignupSuccess() {
        const loginLeft = document.querySelector('.login-left');
        loginLeft.style.transform = 'scale(1.05)';
        loginLeft.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        loginLeft.style.color = 'white';
        
        setTimeout(() => {
            loginLeft.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                    <h2>Account Created!</h2>
                    <p>Welcome to BMSCE Portal...</p>
                </div>
            `;
            
            // Redirect to main app after brief delay
            setTimeout(() => {
                showMainApp();
            }, 1500);
        }, 500);
    }
    
    function showMainApp() {
        const loginPage = document.getElementById('loginPage');
        const mainContent = document.getElementById('mainContent');
        
        if (loginPage && mainContent) {
            // Add logged-in class to body to trigger CSS display changes
            document.body.classList.add('logged-in');
            
            loginPage.style.display = 'none';
            loginPage.classList.remove('active');
            mainContent.style.display = 'flex';
            mainContent.classList.add('active');
            
            // Show dashboard page specifically  
            showPage('dashboard');
            
            // Initialize charts and data after login
            setTimeout(() => {
                if (typeof initializeCharts === 'function') {
                    initializeCharts();
                }
                if (typeof initializeInteractiveGraphs === 'function') {
                    initializeInteractiveGraphs();
                }
                loadDepartmentData();
            }, 300);
        }
    }
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const pages = document.querySelectorAll('.page');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    // Mobile sidebar toggle - Check for both possible IDs
    const mobileMenuBtn = document.getElementById('mobileMenuBtn') || document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }
    
    if (mobileMenuBtn && mobileMenuBtn !== sidebarToggle) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.remove('active');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            sidebar && sidebar.classList.contains('active') &&
            !sidebar.contains(e.target)) {
            
            // Check if click is on any menu button
            let isMenuButton = false;
            if (sidebarToggle && sidebarToggle.contains(e.target)) {
                isMenuButton = true;
            }
            if (mobileMenuBtn && mobileMenuBtn.contains(e.target)) {
                isMenuButton = true;
            }
            
            if (!isMenuButton) {
                sidebar.classList.remove('active');
            }
        }
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
        case 'visualizations':
            // Add delay to ensure canvas elements are rendered
            setTimeout(() => {
                initializeDataVisualizations();
            }, 100);
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
        <div style="padding: 20px; background: #ffffff; border: 1px solid #ddd; color: #000000;">
            <h2 style="color: #000000; margin-bottom: 10px; font-weight: bold;">${data.fullName}</h2>
            <p style="margin: 5px 0; color: #000000;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 5px 0; color: #000000;"><strong>Phone:</strong> ${data.phone}</p>
            <p style="margin: 5px 0; color: #000000;"><strong>Department:</strong> ${data.department}</p>
            
            ${data.skills ? `
                <h3 style="color: #000000; margin-top: 20px; margin-bottom: 10px; font-weight: bold;">Skills</h3>
                <p style="color: #000000;">${data.skills}</p>
            ` : ''}
            
            ${data.experience ? `
                <h3 style="color: #000000; margin-top: 20px; margin-bottom: 10px; font-weight: bold;">Experience</h3>
                <p style="color: #000000;">${data.experience}</p>
            ` : ''}
            
            <button onclick="downloadResume()" style="margin-top: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Download PDF
            </button>
        </div>
    `;
}

function downloadResume() {
    // Get the resume preview element
    const resumeElement = document.getElementById('resumePreview');
    if (!resumeElement) return;
    
    // Check if libraries are loaded
    if (typeof html2canvas === 'undefined') {
        alert('PDF libraries are loading. Please try again in a moment.');
        return;
    }
    
    // Create a clean version of the resume content for PDF generation
    const cleanResumeContent = resumeElement.querySelector('div[style*="padding: 20px"]');
    if (!cleanResumeContent) {
        alert('No resume content found. Please generate a resume first.');
        return;
    }
    
    // Create a temporary container with clean styling for PDF
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = cleanResumeContent.innerHTML;
    tempContainer.style.cssText = `
        position: absolute;
        left: -9999px;
        top: 0;
        width: 794px;
        min-height: 1123px;
        background: #ffffff;
        padding: 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #000000;
        line-height: 1.6;
    `;
    
    // Remove any buttons from the content
    const buttons = tempContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.remove());
    
    document.body.appendChild(tempContainer);
    
    // Use html2canvas to capture only the clean resume content
    html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123
    }).then(canvas => {
        // Remove temporary container
        document.body.removeChild(tempContainer);
        
        // Convert canvas to image
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        // Add image to PDF (full page)
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        
        // Download the PDF
        pdf.save('BMSCE_Resume.pdf');
        
        alert('Resume downloaded successfully!');
    }).catch(error => {
        // Clean up in case of error
        if (document.body.contains(tempContainer)) {
            document.body.removeChild(tempContainer);
        }
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    });
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
    // Generate Google Meet link
    const meetId = generateMeetId();
    const meetLink = `https://meet.google.com/${meetId}`;
    
    // Simulate booking process
    const bookingId = 'INT' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Show booking confirmation with Google Meet link
    const confirmationHtml = `
        <div class="booking-confirmation">
            <h3>Interview Scheduled Successfully!</h3>
            <div class="booking-details">
                <p><strong>Booking ID:</strong> ${bookingId}</p>
                <p><strong>Type:</strong> ${data.type}</p>
                <p><strong>Date:</strong> ${formatDate(data.date)}</p>
                <p><strong>Time:</strong> ${data.time}</p>
                <p><strong>Google Meet Link:</strong> 
                    <a href="${meetLink}" target="_blank" class="meet-link">${meetLink}</a>
                </p>
                <p><strong>Meeting ID:</strong> ${meetId}</p>
            </div>
            <div class="booking-actions">
                <button onclick="copyMeetLink('${meetLink}')" class="btn-secondary">Copy Meet Link</button>
                <button onclick="addToCalendar('${bookingId}', '${data.type}', '${data.date}', '${data.time}', '${meetLink}')" class="btn-primary">Add to Calendar</button>
            </div>
        </div>
    `;
    
    // Replace form with confirmation
    document.querySelector('.booking-form').innerHTML = confirmationHtml;
    
    // Send email simulation
    setTimeout(() => {
        showMessage('Confirmation email sent successfully!', 'success');
    }, 2000);
}

function generateMeetId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let meetId = '';
    
    // Generate format: xxx-yyyy-zzz
    for (let i = 0; i < 3; i++) {
        meetId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    meetId += '-';
    for (let i = 0; i < 4; i++) {
        meetId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    meetId += '-';
    for (let i = 0; i < 3; i++) {
        meetId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return meetId;
}

function copyMeetLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        showMessage('Google Meet link copied to clipboard!', 'success');
    }).catch(() => {
        showMessage('Please copy the link manually', 'error');
    });
}

function addToCalendar(bookingId, type, date, time, meetLink) {
    const startDate = new Date(`${date}T${time}:00`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later
    
    const eventTitle = `BMSCE Mock Interview - ${type}`;
    const eventDescription = `Mock Interview Session\\n\\nBooking ID: ${bookingId}\\nType: ${type}\\nGoogle Meet: ${meetLink}\\n\\nPrepared by BMSCE Placement Portal`;
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(eventDescription)}`;
    
    window.open(googleCalendarUrl, '_blank');
}

// Message system for user feedback
function showMessage(message, type = 'info') {
    // Remove any existing messages
    const existingMessages = document.querySelectorAll('.message-popup');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-popup message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            messageDiv.style.backgroundColor = '#10b981';
            break;
        case 'error':
            messageDiv.style.backgroundColor = '#ef4444';
            break;
        case 'info':
        default:
            messageDiv.style.backgroundColor = '#3b82f6';
            break;
    }
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// Load department data function
function loadDepartmentData() {
    // This function would typically load data from an API
    // For now, we use the static departmentData object
    console.log('Department data loaded:', Object.keys(departmentData));
}

// Alumni connection functionality
function connectAlumni(linkedinUrl) {
    // Open LinkedIn profile in new tab
    window.open(linkedinUrl, '_blank');
    showMessage('LinkedIn profile opened in new tab!', 'success');
}

// LinkedIn integration for alumni network
function openLinkedIn(profileHandle) {
    const linkedInUrl = `https://www.linkedin.com/in/${profileHandle}`;
    window.open(linkedInUrl, '_blank');
    showMessage('Opening LinkedIn profile in new tab...', 'info');
}

// Sharp Interactive Mathematical Graphs
function initializeCharts() {
    createSharpPlacementTrends();
    createSharpDepartmentPerformance();
    createSharpSalaryTrends();
    initializeInteractiveGraphs();
}

// Initialize interactive sharp mathematical graphs
function initializeInteractiveGraphs() {
    const dashboardContainer = document.getElementById('dashboard-charts');
    if (dashboardContainer) {
        dashboardContainer.innerHTML = `
            <div class="sharp-graph-container">
                <h3 class="graph-title">Placement Trends (2019-2025)</h3>
                <div class="mathematical-precision">Statistical Analysis: μ = 82.3%, σ = 9.2%, R² = 0.94</div>
                <canvas id="placementTrendsChart" width="600" height="300"></canvas>
            </div>
            <div class="sharp-graph-container">
                <h3 class="graph-title">Department Performance Comparison</h3>
                <div class="mathematical-precision">Regression Analysis: y = 1.2x + 82.4, p-value < 0.001</div>
                <canvas id="departmentComparisonChart" width="600" height="300"></canvas>
            </div>
        `;
        
        // Create placement trends chart
        createPlacementTrendsChart();
        
        // Create department comparison chart
        createDepartmentComparisonChart();
    }
}

// Chart creation functions
function createPlacementTrendsChart() {
    const canvas = document.getElementById('placementTrendsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart data
    const years = ['2019', '2021', '2023', '2025'];
    const totalStudents = [100, 105, 110, 115];
    const placementRate = [75, 82, 87, 90];
    
    // Chart dimensions
    const padding = 60;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    // Set up scaling
    const xScale = chartWidth / (years.length - 1);
    const yScale = chartHeight / 100;
    
    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw placement rate area chart (purple)
    ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    
    placementRate.forEach((rate, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (rate * yScale);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.fill();
    
    // Draw placement rate line
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    placementRate.forEach((rate, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (rate * yScale);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
    // Draw total students line (teal)
    ctx.strokeStyle = '#14b8a6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    totalStudents.forEach((count, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (count * yScale);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
    // Add labels
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    years.forEach((year, i) => {
        const x = padding + i * xScale;
        ctx.fillText(year, x, padding + chartHeight + 20);
    });
    
    // Add legend
    ctx.fillStyle = '#14b8a6';
    ctx.fillRect(padding, 20, 20, 15);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Total Students', padding + 30, 32);
    
    ctx.fillStyle = '#8b5cf6';
    ctx.fillRect(padding + 150, 20, 20, 15);
    ctx.fillText('Placement Rate %', padding + 180, 32);
}

function createDepartmentComparisonChart() {
    const canvas = document.getElementById('departmentComparisonChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart data
    const departments = ['Computer Science', 'Information Science', 'Mechanical', 'Electronics and Electrical', 'Civil'];
    const highestPackage = [52, 48, 30, 38, 28];
    const averagePackage = [18, 16, 14, 15, 13];
    
    // Chart dimensions
    const padding = 80;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    // Bar dimensions
    const barWidth = chartWidth / (departments.length * 2);
    const maxValue = Math.max(...highestPackage);
    const yScale = chartHeight / maxValue;
    
    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw bars
    departments.forEach((dept, i) => {
        const x = padding + i * (barWidth * 2) + 10;
        
        // Highest package bar (red)
        const highestHeight = highestPackage[i] * yScale;
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(x, padding + chartHeight - highestHeight, barWidth - 5, highestHeight);
        
        // Average package bar (blue)
        const avgHeight = averagePackage[i] * yScale;
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(x + barWidth, padding + chartHeight - avgHeight, barWidth - 5, avgHeight);
    });
    
    // Add labels
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    
    departments.forEach((dept, i) => {
        const x = padding + i * (barWidth * 2) + barWidth;
        ctx.save();
        ctx.translate(x, padding + chartHeight + 15);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(dept, 0, 0);
        ctx.restore();
    });
    
    // Add legend
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(padding, 20, 20, 15);
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Highest Package (LPA)', padding + 30, 32);
    
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(padding + 200, 20, 20, 15);
    ctx.fillText('Average Package (LPA)', padding + 230, 32);
}

// Data Visualizations Page Functions
function initializeDataVisualizations() {
    // Initialize all charts
    createPackageBarChart();
    createPlacementPieChart();
    createTrendsLineChart();
    createPerformanceHeatmap();
    
    // Add event listeners for controls
    document.getElementById('yearFilter').addEventListener('change', updateCharts);
    document.getElementById('viewType').addEventListener('change', updateCharts);
    
    // Add interactive mouse effects
    addInteractiveEffects();
}

function addInteractiveEffects() {
    // Removed hover animations and effects for cleaner appearance
}

function handleBarChartHover(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Add dynamic highlighting based on mouse position
    const ctx = event.target.getContext('2d');
    createPackageBarChart(); // Redraw base chart
    
    // Add hover glow effect at mouse position
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 50);
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.3)');
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, event.target.width, event.target.height);
}

function handlePieChartHover(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ctx = event.target.getContext('2d');
    createPlacementPieChart(); // Redraw base chart
    
    // Add interactive sparkle effect
    for (let i = 0; i < 5; i++) {
        const sparkleX = x + (Math.random() - 0.5) * 40;
        const sparkleY = y + (Math.random() - 0.5) * 40;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`;
        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, 2 + Math.random() * 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function createPackageBarChart() {
    const canvas = document.getElementById('packageBarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const departments = ['CSE', 'ISE', 'ECE', 'ME', 'CE'];
    const highestPackages = [52, 48, 38, 30, 28];
    const averagePackages = [18, 16, 15, 14, 13];
    
    const padding = 60;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    const barWidth = chartWidth / (departments.length * 2.5);
    const maxValue = Math.max(...highestPackages);
    const yScale = chartHeight / maxValue;
    
    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw bars with hover effect simulation
    departments.forEach((dept, i) => {
        const x = padding + i * (barWidth * 2.5) + 20;
        
        // Highest package bar (red)
        const highestHeight = highestPackages[i] * yScale;
        const gradient1 = ctx.createLinearGradient(0, padding + chartHeight - highestHeight, 0, padding + chartHeight);
        gradient1.addColorStop(0, '#ef4444');
        gradient1.addColorStop(1, '#dc2626');
        ctx.fillStyle = gradient1;
        ctx.fillRect(x, padding + chartHeight - highestHeight, barWidth, highestHeight);
        
        // Average package bar (blue)
        const avgHeight = averagePackages[i] * yScale;
        const gradient2 = ctx.createLinearGradient(0, padding + chartHeight - avgHeight, 0, padding + chartHeight);
        gradient2.addColorStop(0, '#3b82f6');
        gradient2.addColorStop(1, '#2563eb');
        ctx.fillStyle = gradient2;
        ctx.fillRect(x + barWidth + 5, padding + chartHeight - avgHeight, barWidth, avgHeight);
        
        // Add sharp, clear value labels on bars
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.imageSmoothingEnabled = false;
        ctx.fillText(`₹${highestPackages[i]}L`, x + barWidth/2, padding + chartHeight - highestHeight - 15);
        ctx.fillText(`₹${averagePackages[i]}L`, x + barWidth + 5 + barWidth/2, padding + chartHeight - avgHeight - 15);
        
        // Sharp department labels
        ctx.fillStyle = '#e2e8f0';
        ctx.font = 'bold 14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
        ctx.textBaseline = 'top';
        ctx.imageSmoothingEnabled = false;
        ctx.fillText(dept, x + barWidth, padding + chartHeight + 15);
    });
    
    // Sharp Y-axis labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.imageSmoothingEnabled = false;
    for (let i = 0; i <= 5; i++) {
        const value = (maxValue / 5) * i;
        const y = padding + chartHeight - (value * yScale);
        ctx.fillText(`₹${Math.round(value)}L`, padding - 10, y);
    }
}

function createPlacementPieChart() {
    const canvas = document.getElementById('placementPieChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 140;
    
    const departments = ['CSE', 'ISE', 'ECE', 'ME', 'CE'];
    const placedCounts = [180, 165, 142, 158, 182];
    const colors = ['#7c3aed', '#8b5cf6', '#a855f7', '#c084fc', '#d8b4fe'];
    
    const total = placedCounts.reduce((sum, count) => sum + count, 0);
    let currentAngle = -Math.PI / 2; // Start from top
    
    // Draw pie slices
    placedCounts.forEach((count, i) => {
        const sliceAngle = (count / total) * 2 * Math.PI;
        
        // Create gradient for each slice
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, colors[i]);
        gradient.addColorStop(1, colors[i] + '80');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        
        // Add stroke for separation
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Add labels
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.imageSmoothingEnabled = false;
        ctx.fillText(departments[i], labelX, labelY - 5);
        ctx.font = 'bold 12px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
        ctx.fillText(`${count}`, labelX, labelY + 10);
        ctx.fillText(`${((count/total)*100).toFixed(1)}%`, labelX, labelY + 25);
        
        currentAngle += sliceAngle;
    });
    
    // Add center circle for donut effect
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI);
    ctx.fill();
    
    // Sharp center text
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 16px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.imageSmoothingEnabled = false;
    ctx.fillText('Total', centerX, centerY - 5);
    ctx.fillText(total.toString(), centerX, centerY + 15);
}

function createTrendsLineChart() {
    const canvas = document.getElementById('trendsLineChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
    const placementRates = [72, 75, 78, 81, 83, 85, 86, 87, 88, 89, 91];
    const avgPackages = [8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20];
    
    const padding = 80;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    const xScale = chartWidth / (years.length - 1);
    
    // Draw axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw placement rate line (purple)
    const rateScale = chartHeight / 100;
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    placementRates.forEach((rate, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (rate * rateScale);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Draw average package line (teal)
    const packageScale = chartHeight / 25; // Max 25 LPA
    ctx.strokeStyle = '#14b8a6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    avgPackages.forEach((pkg, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (pkg * packageScale);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    
    // Add data points with hover effect
    placementRates.forEach((rate, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (rate * rateScale);
        
        // Outer glow
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fill();
        
        // Inner circle
        ctx.fillStyle = '#8b5cf6';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    avgPackages.forEach((pkg, i) => {
        const x = padding + i * xScale;
        const y = padding + chartHeight - (pkg * packageScale);
        
        // Outer glow
        ctx.fillStyle = 'rgba(20, 184, 166, 0.3)';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.fill();
        
        // Inner circle
        ctx.fillStyle = '#14b8a6';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // Sharp axis labels
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 12px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.imageSmoothingEnabled = false;
    years.forEach((year, i) => {
        const x = padding + i * xScale;
        ctx.fillText(year, x, padding + chartHeight + 15);
    });
}

function createPerformanceHeatmap() {
    const container = document.getElementById('performanceHeatmap');
    if (!container) return;
    
    container.innerHTML = '';
    
    const departments = ['CSE', 'ISE', 'ECE', 'ME', 'CE'];
    const years = ['2021', '2022', '2023', '2024', '2025'];
    
    // Performance data (placement rates)
    const performanceData = [
        [85, 87, 89, 91, 93], // CSE
        [82, 84, 86, 88, 90], // ISE
        [78, 80, 82, 84, 86], // ECE
        [75, 77, 79, 81, 83], // ME
        [73, 75, 77, 79, 81]  // CE
    ];
    
    // Add year headers
    const headerRow = document.createElement('div');
    headerRow.style.gridColumn = '1 / -1';
    headerRow.style.display = 'grid';
    headerRow.style.gridTemplateColumns = 'auto repeat(5, 1fr)';
    headerRow.style.gap = '0.5rem';
    headerRow.style.marginBottom = '0.5rem';
    
    // Empty cell for department column
    const emptyCell = document.createElement('div');
    emptyCell.style.padding = '0.5rem';
    headerRow.appendChild(emptyCell);
    
    years.forEach(year => {
        const yearCell = document.createElement('div');
        yearCell.textContent = year;
        yearCell.style.padding = '0.5rem';
        yearCell.style.color = '#e2e8f0';
        yearCell.style.fontWeight = '600';
        yearCell.style.textAlign = 'center';
        headerRow.appendChild(yearCell);
    });
    
    container.appendChild(headerRow);
    
    // Add data rows
    departments.forEach((dept, deptIndex) => {
        // Department label
        const deptCell = document.createElement('div');
        deptCell.textContent = dept;
        deptCell.style.padding = '0.75rem';
        deptCell.style.color = '#e2e8f0';
        deptCell.style.fontWeight = '600';
        deptCell.style.display = 'flex';
        deptCell.style.alignItems = 'center';
        deptCell.style.justifyContent = 'center';
        deptCell.style.background = '#374151';
        deptCell.style.borderRadius = '0.25rem';
        container.appendChild(deptCell);
        
        // Performance cells
        performanceData[deptIndex].forEach((value, yearIndex) => {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            
            // Use muted color palette - remove bright yellow/green
            const normalizedValue = (value - 70) / 25; // Normalize to 0-1
            let backgroundColor;
            if (normalizedValue >= 0.8) {
                backgroundColor = '#6366f1'; // Indigo
            } else if (normalizedValue >= 0.6) {
                backgroundColor = '#8b5cf6'; // Purple
            } else if (normalizedValue >= 0.4) {
                backgroundColor = '#a855f7'; // Light purple
            } else if (normalizedValue >= 0.2) {
                backgroundColor = '#64748b'; // Slate
            } else {
                backgroundColor = '#475569'; // Dark slate
            }
            cell.style.setProperty('--cell-color', backgroundColor);
            
            const label = document.createElement('div');
            label.className = 'heatmap-cell-label';
            label.textContent = `${dept} ${years[yearIndex]}`;
            
            const valueDiv = document.createElement('div');
            valueDiv.className = 'heatmap-cell-value';
            valueDiv.textContent = `${value}%`;
            
            cell.appendChild(label);
            cell.appendChild(valueDiv);
            
            // Removed hover scaling effects
            
            container.appendChild(cell);
        });
    });
}

function updateCharts() {
    // This function would update charts based on filter selections
    // For now, just recreate them
    createPackageBarChart();
    createPlacementPieChart();
    createTrendsLineChart();
    createPerformanceHeatmap();
}

// Animation functions for insight cards
function animateInsightCard(card) {
    // Removed animations
}

function resetInsightCard(card) {
    // Removed animations
}

function createSharpGraph(containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Add grid background
    const grid = document.createElement('div');
    grid.className = 'graph-grid';
    container.appendChild(grid);
    
    // Add Y-axis
    const yAxis = document.createElement('div');
    yAxis.className = 'y-axis';
    for (let i = 0; i <= 10; i++) {
        const label = document.createElement('span');
        label.textContent = (100 - i * 10);
        yAxis.appendChild(label);
    }
    container.appendChild(yAxis);
    
    if (type === 'departments') {
        // Department bars
        const barsContainer = document.createElement('div');
        barsContainer.className = 'graph-data-bars';
        
        const departments = [
            { name: 'CSE', value: 90, color: '#7c3aed' },
            { name: 'ISE', value: 85, color: '#8b5cf6' },
            { name: 'ECE', value: 80, color: '#a855f7' },
            { name: 'ME', value: 75, color: '#c084fc' },
            { name: 'CE', value: 70, color: '#d8b4fe' },
            { name: 'BT', value: 65, color: '#e9d5ff' }
        ];
        
        departments.forEach(dept => {
            const bar = document.createElement('div');
            bar.className = 'data-bar';
            bar.style.height = `${dept.value}%`;
            bar.style.background = `linear-gradient(to top, ${dept.color}, ${dept.color}dd)`;
            
            const value = document.createElement('div');
            value.className = 'bar-value';
            value.textContent = `${dept.value}%`;
            bar.appendChild(value);
            
            const label = document.createElement('div');
            label.className = 'bar-label';
            label.textContent = dept.name;
            bar.appendChild(label);
            
            // Add hover interaction
            bar.addEventListener('mouseenter', (e) => {
                showInteractiveTooltip(e, dept);
            });
            
            bar.addEventListener('mouseleave', () => {
                hideInteractiveTooltip();
            });
            
            barsContainer.appendChild(bar);
        });
        
        container.appendChild(barsContainer);
    } else if (type === 'trends') {
        // Trend line chart
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 500 300');
        
        const trendData = [
            { x: 50, y: 120, year: 2020, value: 84 },
            { x: 130, y: 110, year: 2021, value: 85 },
            { x: 210, y: 100, year: 2022, value: 87 },
            { x: 290, y: 85, year: 2023, value: 88 },
            { x: 370, y: 70, year: 2024, value: 89 },
            { x: 450, y: 70, year: 2025, value: 89 }
        ];
        
        // Create trend line
        const line = document.createElementNS(svgNS, 'polyline');
        const pointsStr = trendData.map(p => `${p.x},${p.y}`).join(' ');
        line.setAttribute('points', pointsStr);
        line.setAttribute('class', 'trend-line');
        line.setAttribute('stroke', '#7c3aed');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('fill', 'none');
        svg.appendChild(line);
        
        // Create data points
        trendData.forEach(point => {
            const circle = document.createElementNS(svgNS, 'circle');
            circle.setAttribute('cx', point.x);
            circle.setAttribute('cy', point.y);
            circle.setAttribute('r', 5);
            circle.setAttribute('class', 'trend-point');
            circle.setAttribute('fill', '#fbbf24');
            circle.setAttribute('stroke', '#7c3aed');
            circle.setAttribute('stroke-width', '2');
            
            circle.addEventListener('mouseenter', (e) => {
                showInteractiveTooltip(e, point);
            });
            
            circle.addEventListener('mouseleave', () => {
                hideInteractiveTooltip();
            });
            
            svg.appendChild(circle);
        });
        
        container.appendChild(svg);
    }
    
    // Add formula overlay
    const formula = document.createElement('div');
    formula.className = 'formula-overlay';
    formula.textContent = type === 'departments' ? 'σ² = 82.7' : 'R² = 0.94';
    container.appendChild(formula);
}

function showInteractiveTooltip(event, data) {
    let tooltip = document.getElementById('interactive-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'interactive-tooltip';
        tooltip.className = 'hover-tooltip';
        document.body.appendChild(tooltip);
    }
    
    tooltip.innerHTML = `
        <div class="tooltip-title">${data.name || data.year}</div>
        <div class="tooltip-value">${data.value}%</div>
        <div class="tooltip-details">
            ${data.name ? 'Placement Rate' : 'Annual Performance'}<br>
            Statistical Variance: ±${Math.random() * 3 + 1}%
        </div>
    `;
    
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = (event.pageY - 80) + 'px';
    tooltip.classList.add('show');
}

function hideInteractiveTooltip() {
    const tooltip = document.getElementById('interactive-tooltip');
    if (tooltip) {
        tooltip.classList.remove('show');
    }
}

function createSharpPlacementTrends() {
    const container = document.getElementById('placementTrendsChart');
    if (!container) return;
    
    const data = [
        { year: '2020', rate: 75, students: 850, placed: 638, avg: 8.5 },
        { year: '2021', rate: 78, students: 880, placed: 686, avg: 11.2 },
        { year: '2022', rate: 82, students: 920, placed: 754, avg: 14.8 },
        { year: '2023', rate: 85, students: 950, placed: 808, avg: 17.9 },
        { year: '2024', rate: 88, students: 980, placed: 862, avg: 21.4 },
        { year: '2025', rate: 89, students: 1000, placed: 890, avg: 23.7 }
    ];
    
    container.innerHTML = `
        <div class="sharp-graph-container">
            <h3 class="graph-title">Placement Rate Trend Analysis (2020-2025)</h3>
            <div class="mathematical-precision">σ = 5.2% | μ = 82.8% | R² = 0.94</div>
            <div class="sharp-graph">
                <div class="graph-grid"></div>
                <div class="graph-data-bars">
                    ${data.map((item, index) => `
                        <div class="data-bar" 
                             style="height: ${(item.rate - 50) * 4}px"
                             data-year="${item.year}"
                             data-rate="${item.rate}"
                             data-students="${item.students}"
                             data-placed="${item.placed}"
                             data-avg="${item.avg}">
                            <div class="bar-value">${item.rate}%</div>
                            <div class="bar-label">${item.year}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="y-axis">
                    <span>100%</span>
                    <span>80%</span>
                    <span>60%</span>
                    <span>40%</span>
                    <span>20%</span>
                </div>
                <div class="formula-overlay">f(x) = 2.8x + 70.2</div>
            </div>
            <div class="hover-tooltip" id="placementTooltip"></div>
        </div>
    `;
    
    addInteractiveTooltips('placementTooltip');
}

function createSharpDepartmentPerformance() {
    const container = document.getElementById('departmentPerformanceChart');
    if (!container) return;
    
    const deptData = [
        { dept: 'CSE', rate: 92, color: '#7c3aed', students: 162 },
        { dept: 'ISE', rate: 86, color: '#8b5cf6', students: 132 },
        { dept: 'ECE', rate: 78, color: '#a855f7', students: 142 },
        { dept: 'MECH', rate: 71, color: '#c084fc', students: 152 },
        { dept: 'CIVIL', rate: 67, color: '#ddd6fe', students: 138 },
        { dept: 'BIO', rate: 62, color: '#ede9fe', students: 98 }
    ];
    
    container.innerHTML = `
        <div class="sharp-graph-container">
            <h3 class="graph-title">Department Performance Comparison (2024-25)</h3>
            <div class="mathematical-precision">Σ = 456% | μ = 76% | σ = 12.3%</div>
            <div class="dept-performance-chart">
                ${deptData.map((dept, index) => `
                    <div class="dept-bar" 
                         style="height: ${dept.rate * 2.5}px; background: linear-gradient(to top, ${dept.color} 0%, ${dept.color}aa 100%)"
                         data-dept="${dept.dept}"
                         data-rate="${dept.rate}"
                         data-students="${dept.students}"
                         data-value="${dept.rate}%">
                        <div class="dept-label">${dept.dept}</div>
                    </div>
                `).join('')}
            </div>
            <div class="hover-tooltip" id="deptTooltip"></div>
        </div>
    `;
    
    addInteractiveTooltips('deptTooltip');
}

function createSharpSalaryTrends() {
    const container = document.getElementById('salaryTrendsChart');
    if (!container) return;
    
    const salaryData = [
        { year: '2020', highest: 28, avg: 8.5, median: 6.2 },
        { year: '2021', highest: 32, avg: 11.2, median: 8.1 },
        { year: '2022', highest: 38, avg: 14.8, median: 10.5 },
        { year: '2023', highest: 44, avg: 17.9, median: 13.2 },
        { year: '2024', highest: 50, avg: 21.4, median: 16.8 },
        { year: '2025', highest: 52, avg: 23.7, median: 18.5 }
    ];
    
    container.innerHTML = `
        <div class="sharp-graph-container">
            <h3 class="graph-title">Salary Package Trends (LPA)</h3>
            <div class="mathematical-precision">Growth Rate: 18.4% YoY | Correlation: 0.97</div>
            <div class="trends-chart">
                <svg width="100%" height="100%">
                    <defs>
                        <linearGradient id="salaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    ${createTrendLines(salaryData)}
                </svg>
            </div>
            <div class="hover-tooltip" id="salaryTooltip"></div>
        </div>
    `;
    
    addInteractiveTooltips('salaryTooltip');
}

function createTrendLines(data) {
    const width = 100;
    const height = 85;
    const padding = 10;
    
    const maxValue = Math.max(...data.map(d => d.highest));
    const minValue = Math.min(...data.map(d => d.avg));
    
    const scaleX = (width - 2 * padding) / (data.length - 1);
    const scaleY = (height - 2 * padding) / (maxValue - minValue);
    
    let highestPath = '';
    let avgPath = '';
    let points = '';
    
    data.forEach((item, index) => {
        const x = padding + index * scaleX;
        const highestY = height - padding - (item.highest - minValue) * scaleY;
        const avgY = height - padding - (item.avg - minValue) * scaleY;
        
        if (index === 0) {
            highestPath = `M ${x} ${highestY}`;
            avgPath = `M ${x} ${avgY}`;
        } else {
            highestPath += ` L ${x} ${highestY}`;
            avgPath += ` L ${x} ${avgY}`;
        }
        
        points += `
            <circle class="trend-point" cx="${x}%" cy="${highestY}%" r="4" 
                    data-year="${item.year}" data-type="highest" data-value="${item.highest}"/>
            <circle class="trend-point" cx="${x}%" cy="${avgY}%" r="3" 
                    data-year="${item.year}" data-type="average" data-value="${item.avg}"/>
        `;
    });
    
    return `
        <path class="trend-line" d="${highestPath}" stroke="#7c3aed" stroke-width="3" fill="none"/>
        <path class="trend-line" d="${avgPath}" stroke="#a855f7" stroke-width="2" fill="none"/>
        ${points}
    `;
}

function addInteractiveTooltips(tooltipId) {
    const tooltip = document.getElementById(tooltipId);
    const interactiveElements = document.querySelectorAll('.data-bar, .dept-bar, .trend-point');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            const data = e.target.dataset;
            
            let content = '';
            if (data.year && data.rate) {
                content = `
                    <div class="tooltip-title">Year ${data.year}</div>
                    <div class="tooltip-value">${data.rate}% Placement Rate</div>
                    <div class="tooltip-details">
                        Students: ${data.students}<br>
                        Placed: ${data.placed}<br>
                        Avg Package: ₹${data.avg} LPA
                    </div>
                `;
            } else if (data.dept) {
                content = `
                    <div class="tooltip-title">${data.dept} Department</div>
                    <div class="tooltip-value">${data.rate}% Placement</div>
                    <div class="tooltip-details">
                        Total Students: ${data.students}<br>
                        Placed: ${Math.round(data.students * data.rate / 100)}
                    </div>
                `;
            } else if (data.type) {
                content = `
                    <div class="tooltip-title">${data.year} - ${data.type}</div>
                    <div class="tooltip-value">₹${data.value} LPA</div>
                    <div class="tooltip-details">
                        Mathematical precision: f(${data.year}) = ${data.value}
                    </div>
                `;
            }
            
            tooltip.innerHTML = content;
            tooltip.style.left = (rect.left + rect.width / 2) + 'px';
            tooltip.style.top = (rect.top - 10) + 'px';
            tooltip.classList.add('show');
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
    });
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
    // Clear any existing user session for testing
    // localStorage.removeItem('bmsce-user');
    
    initializeLogin();
    initializeNavigation();
    initializeResumeBuilder();
    initializeInterviewBooking();
    
    // Ensure proper display states
    const loginPage = document.getElementById('loginPage');
    const mainContent = document.getElementById('mainContent');
    
    if (loginPage && mainContent) {
        const savedUser = localStorage.getItem('bmsce-user');
        if (!savedUser) {
            // Force login page to display first
            document.body.classList.remove('logged-in');
            loginPage.style.display = 'flex';
            mainContent.style.display = 'none';
        } else {
            // User is already logged in
            document.body.classList.add('logged-in');
            loginPage.style.display = 'none';
            mainContent.style.display = 'flex';
            showPage('dashboard');
        }
    }
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

// Chart initialization
function initializeCharts() {
    createPlacementTrendChart();
    createDepartmentChart();
}

function createPlacementTrendChart() {
    const canvas = document.getElementById('placementTrendChart');
    const ctx = canvas.getContext('2d');
    
    // Chart data
    const years = ['2020', '2021', '2022', '2023', '2024', '2025'];
    const placementRates = [84, 85, 87, 88, 89, 89];
    const avgPackages = [8.5, 10.2, 13.8, 16.4, 18.2, 18.0];
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart settings
    const padding = 40;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    // Draw background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw placement rate line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    placementRates.forEach((rate, index) => {
        const x = padding + (index * chartWidth) / (years.length - 1);
        const y = padding + chartHeight - (rate - 80) * chartHeight / 20;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        // Draw point
        ctx.fillStyle = '#667eea';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
    ctx.stroke();
    
    // Draw average package bars
    ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
    avgPackages.forEach((pkg, index) => {
        const x = padding + (index * chartWidth) / (years.length - 1) - 15;
        const height = (pkg / 20) * chartHeight;
        const y = padding + chartHeight - height;
        
        ctx.fillRect(x, y, 30, height);
    });
    
    // Draw axes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Inter';
    years.forEach((year, index) => {
        const x = padding + (index * chartWidth) / (years.length - 1);
        ctx.fillText(year, x - 15, padding + chartHeight + 20);
    });
    
    // Add legend
    ctx.fillStyle = '#667eea';
    ctx.fillRect(padding, 10, 12, 12);
    ctx.fillStyle = '#64748b';
    ctx.fillText('Placement Rate (%)', padding + 20, 20);
    
    ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
    ctx.fillRect(padding + 150, 10, 12, 12);
    ctx.fillStyle = '#64748b';
    ctx.fillText('Avg Package (LPA)', padding + 170, 20);
}

function createDepartmentChart() {
    const canvas = document.getElementById('departmentChart');
    const ctx = canvas.getContext('2d');
    
    // Chart data
    const departments = ['CSE', 'ISE', 'ECE', 'MECH', 'CIVIL', 'BIO'];
    const placementRates = [92, 86, 78, 71, 67, 62];
    const colors = ['#667eea', '#764ba2', '#4f46e5', '#7c3aed', '#2563eb', '#0891b2'];
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Chart settings
    const padding = 40;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    const barWidth = chartWidth / departments.length - 10;
    
    // Draw background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw bars
    departments.forEach((dept, index) => {
        const x = padding + (index * (chartWidth / departments.length)) + 5;
        const height = (placementRates[index] / 100) * chartHeight;
        const y = padding + chartHeight - height;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, colors[index]);
        gradient.addColorStop(1, colors[index] + '80');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);
        
        // Draw value on top
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Inter';
        ctx.fillText(placementRates[index] + '%', x + barWidth/2 - 10, y - 5);
        
        // Draw department label
        ctx.fillText(dept, x + barWidth/2 - 15, padding + chartHeight + 20);
    });
    
    // Draw axes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.metric-card, .info-card, .chart-container, .resource-card, .alumni-card').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced message system
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <span class="message-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
            <span class="message-text">${message}</span>
        </div>
        <button class="message-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add to document
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 5000);
}

// Add CSS for message toast
const messageStyles = `
    .message-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid #e2e8f0;
        padding: 1rem;
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
    }
    
    .message-toast.show {
        transform: translateX(0);
    }
    
    .message-toast.success {
        border-left: 4px solid #10b981;
    }
    
    .message-toast.error {
        border-left: 4px solid #ef4444;
    }
    
    .message-toast.info {
        border-left: 4px solid #3b82f6;
    }
    
    .message-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .message-icon {
        font-weight: bold;
        font-size: 1.1rem;
    }
    
    .message-toast.success .message-icon {
        color: #10b981;
    }
    
    .message-toast.error .message-icon {
        color: #ef4444;
    }
    
    .message-toast.info .message-icon {
        color: #3b82f6;
    }
    
    .message-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #64748b;
        padding: 0.25rem;
        line-height: 1;
    }
    
    .message-close:hover {
        color: #374151;
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet);

// Logout functionality
function logout() {
    localStorage.removeItem('bmsce-user');
    location.reload();
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
    departmentData,
    connectAlumni,
    logout,
    initializeCharts
};