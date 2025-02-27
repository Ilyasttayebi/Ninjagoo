// Fonction pour démarrer le compte à rebours
function startCountdown() {
    // Définir les valeurs fixes pour le compte à rebours
    let daysLeft = 48;
    let hoursLeft = 12;
    let minutesLeft = 45;
    let secondsLeft = 12;
  
    // Mettre à jour le compte à rebours toutes les secondes
    const countdownInterval = setInterval(() => {
      // Afficher les valeurs dans le HTML
      document.getElementById("days").textContent = daysLeft;
      document.getElementById("hours").textContent = hoursLeft;
      document.getElementById("minutes").textContent = minutesLeft;
      document.getElementById("seconds").textContent = secondsLeft;
  
      // Décrémenter le temps
      if (secondsLeft > 0) {
        secondsLeft--;
      } else {
        secondsLeft = 59;
        if (minutesLeft > 0) {
          minutesLeft--;
        } else {
          minutesLeft = 59;
          if (hoursLeft > 0) {
            hoursLeft--;
          } else {
            hoursLeft = 23;
            if (daysLeft > 0) {
              daysLeft--;
            }
          }
        }
      }
  
      // Si le compte à rebours est terminé, afficher un message
      if (daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<p>La nouvelle saison est disponible !</p>";
      }
    }, 1000); // Mettre à jour toutes les secondes
  }
  
  // Démarrer le compte à rebours lorsque la page est chargée
  window.addEventListener("load", startCountdown);