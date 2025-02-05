document.addEventListener('DOMContentLoaded', () => {
    const jobListings = [
        { title: "Software Engineer", description: "Develop and maintain software applications.", company: "Tech Corp" },
        { title: "Product Manager", description: "Lead product development and strategy.", company: "Business Inc." },
    ];

    const jobListingsContainer = document.getElementById('job-listings');
    jobListings.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p><p><strong>Company:</strong> ${job.company}</p>`;
        jobListingsContainer.appendChild(jobElement);
    });

    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Application submitted successfully!');
        });
    }

    const jobPostingForm = document.getElementById('job-posting-form');
    if (jobPostingForm) {
        jobPostingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Job posted successfully!');
        });
    }
});