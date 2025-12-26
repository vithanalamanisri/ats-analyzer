document.addEventListener('DOMContentLoaded', () => {
    const branchSelect = document.getElementById('branch');
    const roleSelect = document.getElementById('job_role');

    if (branchSelect) {
        branchSelect.addEventListener('change', function() {
            const selectedBranch = this.value;
            
            // Reset Role Dropdown
            roleSelect.innerHTML = '<option value="">-- Choose Role --</option>';
            
            if (selectedBranch && BRANCH_DATA[selectedBranch]) {
                roleSelect.disabled = false;
                
                // Populate roles from the BRANCH_DATA object
                const roles = Object.keys(BRANCH_DATA[selectedBranch]);
                roles.forEach(role => {
                    const option = document.createElement('option');
                    option.value = role;
                    option.textContent = role;
                    roleSelect.appendChild(option);
                });
            } else {
                roleSelect.disabled = true;
            }
        });
    }
});
