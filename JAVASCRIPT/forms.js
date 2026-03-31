/* ============================================
   FORMS.JS — Validation & envoi formulaire contact via EmailJS
   Vision Mobile Studio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('REi58AEadkPdDseHv');

    const form = document.querySelector('#contactForm');
    if (!form) return;

    const messageEl = document.querySelector('#formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = document.getElementById('nom');
        const commande = document.getElementById('commande');
        const tel = document.getElementById('tel');
        const mail = document.getElementById('mail');
        const date = document.getElementById('date');
        const lieu = document.getElementById('lieu');

        // Reset states
        [nom, commande, tel, mail, date, lieu].forEach(input => {
            if (input) {
                input.classList.remove('error', 'success');
            }
        });

        let isValid = true;
        const errors = [];

        // Validate nom
        if (nom && !nom.value.trim()) {
            nom.classList.add('error');
            errors.push('Veuillez entrer votre nom');
            isValid = false;
        } else if (nom) {
            nom.classList.add('success');
        }

        // Validate commande
        if (commande && !commande.value.trim()) {
            commande.classList.add('error');
            errors.push('Veuillez entrer votre commande');
            isValid = false;
        } else if (commande) {
            commande.classList.add('success');
        }

        // Validate tel
        if (tel && !tel.value.trim()) {
            tel.classList.add('error');
            errors.push('Veuillez entrer votre numéro de téléphone');
            isValid = false;
        } else if (tel) {
            tel.classList.add('success');
        }

        // Validate email
        if (mail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!mail.value.trim()) {
                mail.classList.add('error');
                errors.push('Veuillez entrer votre e-mail');
                isValid = false;
            } else if (!emailRegex.test(mail.value)) {
                mail.classList.add('error');
                errors.push('Veuillez entrer un e-mail valide');
                isValid = false;
            } else {
                mail.classList.add('success');
            }
        }

        // Optional fields
        if (date && date.value) date.classList.add('success');
        if (lieu && lieu.value.trim()) lieu.classList.add('success');

        // Si le formulaire est valide, envoyer via EmailJS
        if (isValid) {
            // Désactiver le bouton pendant l'envoi
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Envoi en cours...';
            }

            // Préparer les données pour le template EmailJS
            const templateParams = {
                nom: nom.value.trim(),
                commande: commande.value.trim(),
                tel: tel.value.trim(),
                mail: mail.value.trim(),
                date: date && date.value ? date.value : 'Non spécifiée',
                lieu: lieu && lieu.value.trim() ? lieu.value.trim() : 'Non spécifié'
            };

            // Envoyer l'email via EmailJS
            emailjs.send('service_6wmmqzd', 'template_zbbuabo', templateParams)
                .then(function () {
                    // Succès
                    if (messageEl) {
                        messageEl.textContent = '✅ Message envoyé avec succès ! Nous vous contacterons bientôt.';
                        messageEl.className = 'form-message success';
                    }
                    form.reset();

                    // Reset les styles après un délai
                    setTimeout(() => {
                        [nom, commande, tel, mail, date, lieu].forEach(input => {
                            if (input) input.classList.remove('success');
                        });
                        if (messageEl) messageEl.className = 'form-message';
                    }, 4000);
                })
                .catch(function (error) {
                    // Erreur
                    console.error('Erreur EmailJS:', error);
                    if (messageEl) {
                        messageEl.textContent = '❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter par téléphone.';
                        messageEl.className = 'form-message error';
                    }
                })
                .finally(function () {
                    // Réactiver le bouton
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Envoyer';
                    }
                });
        } else {
            // Afficher la première erreur de validation
            if (messageEl) {
                messageEl.textContent = errors[0];
                messageEl.className = 'form-message error';
            }
        }
    });

    // Validation en temps réel
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');
            if (messageEl) {
                messageEl.className = 'form-message';
            }
        });
    });
});
