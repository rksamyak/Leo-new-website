/* ══════════════════════════════════════
   CAREERS — Form + Role Pre-Selection
   ══════════════════════════════════════ */

function initCareers() {

  /* ── Role card "Apply Now" buttons → scroll to form + pre-select role ── */
  document.querySelectorAll('.cr-role-card__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var role = this.dataset.role;
      var select = document.getElementById('applyRole');
      var applySection = document.getElementById('apply');

      if (select && role) {
        select.value = role;
        select.dispatchEvent(new Event('change'));
      }

      if (applySection) {
        applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        /* Focus the name field after scroll */
        setTimeout(function () {
          var nameInput = document.getElementById('applyName');
          if (nameInput) nameInput.focus();
        }, 600);
      }
    });
  });

  /* ── Resume file drop zone ── */
  var dropZone    = document.getElementById('resumeDropZone');
  var fileInput   = document.getElementById('applyResume');
  var resumeLabel = document.getElementById('resumeLabel');

  function setResumeFile(file) {
    if (!file) return;
    var maxMB = 5;
    if (file.size > maxMB * 1024 * 1024) {
      resumeLabel.innerHTML = '<span style="color:#dc2626">File too large — max 5 MB</span>';
      fileInput.value = '';
      dropZone.classList.remove('has-file');
      return;
    }
    var allowed = /\.(pdf|doc|docx)$/i;
    if (!allowed.test(file.name)) {
      resumeLabel.innerHTML = '<span style="color:#dc2626">Only PDF, DOC, or DOCX files allowed</span>';
      fileInput.value = '';
      dropZone.classList.remove('has-file');
      return;
    }
    resumeLabel.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> ' + file.name;
    dropZone.classList.add('has-file');
  }

  if (dropZone && fileInput) {
    dropZone.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
    });
    fileInput.addEventListener('change', function () {
      if (this.files && this.files[0]) setResumeFile(this.files[0]);
    });
    dropZone.addEventListener('dragover', function (e) {
      e.preventDefault();
      dropZone.classList.add('is-dragover');
    });
    dropZone.addEventListener('dragleave', function () {
      dropZone.classList.remove('is-dragover');
    });
    dropZone.addEventListener('drop', function (e) {
      e.preventDefault();
      dropZone.classList.remove('is-dragover');
      var file = e.dataTransfer.files && e.dataTransfer.files[0];
      if (file) setResumeFile(file);
    });
  }

  /* ── Form validation + submission ── */
  var form       = document.getElementById('applyForm');
  var submitBtn  = document.getElementById('submitBtn');
  var spinner    = document.getElementById('submitSpinner');
  var submitText = form ? form.querySelector('.cr-form__submit-text') : null;
  var formFields = document.getElementById('formFields');
  var formSuccess = document.getElementById('formSuccess');

  if (!form) return;

  function showError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input)  input.classList.add('has-error');
    if (error)  error.textContent = message;
  }

  function clearError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (input)  input.classList.remove('has-error');
    if (error)  error.textContent = '';
  }

  /* Clear errors on input */
  ['applyName', 'applyEmail', 'applyPhone', 'applyRole'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', function () { clearError(id, id.replace('apply', '').toLowerCase() + 'Error'); });
    el.addEventListener('change', function () { clearError(id, id.replace('apply', '').toLowerCase() + 'Error'); });
  });

  function validate() {
    var valid = true;

    var name  = document.getElementById('applyName');
    var email = document.getElementById('applyEmail');
    var phone = document.getElementById('applyPhone');
    var role  = document.getElementById('applyRole');

    /* Name */
    if (!name || !name.value.trim()) {
      showError('applyName', 'nameError', 'Please enter your full name.');
      valid = false;
    } else {
      clearError('applyName', 'nameError');
    }

    /* Email */
    var emailVal = email ? email.value.trim() : '';
    var emailOk  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    if (!emailOk) {
      showError('applyEmail', 'emailError', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('applyEmail', 'emailError');
    }

    /* Phone */
    var phoneVal = phone ? phone.value.trim() : '';
    if (!phoneVal || phoneVal.length < 7) {
      showError('applyPhone', 'phoneError', 'Please enter a valid phone number.');
      valid = false;
    } else {
      clearError('applyPhone', 'phoneError');
    }

    /* Role */
    if (!role || !role.value) {
      showError('applyRole', 'roleError', 'Please select a job role.');
      valid = false;
    } else {
      clearError('applyRole', 'roleError');
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    /* Show loading state */
    submitBtn.disabled = true;
    if (submitText)  submitText.textContent = 'Submitting…';
    if (spinner)     spinner.hidden = false;
    var arrow = form.querySelector('.cr-form__submit-arrow');
    if (arrow)       arrow.hidden = true;

    /* Simulate submission (replace with real API call if needed) */
    setTimeout(function () {
      if (formFields)  formFields.hidden = true;
      if (formSuccess) formSuccess.hidden = false;

      submitBtn.disabled = false;
      if (submitText)  submitText.textContent = 'Submit Application';
      if (spinner)     spinner.hidden = true;
      if (arrow)       arrow.hidden = false;
    }, 1200);
  });
}

/* Boot */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCareers);
} else {
  initCareers();
}
