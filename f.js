
        // Function to share the current URL on WhatsApp
        function shareLink() {
            var currentURL = window.location.href;
            var message = "Check out this dynamic web page: " + currentURL;
            var whatsappURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
            window.open(whatsappURL);
        }

        // Function to handle form submission
        document.getElementById("nameForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var name = document.getElementById("nameInput").value;
            document.getElementById("heading1").innerText = name ;
            document.getElementById("heading2").innerText = "-by " + name;
            var newURL = window.location.href.split("?")[0] + "?name=" + encodeURIComponent(name);
            window.history.replaceState({}, '', newURL);
        });

        // Function to retrieve the name from the URL and update the heading
        function updateHeading() {
            var urlParams = new URLSearchParams(window.location.search);
            var name = urlParams.get("name");
            if (name) {
                document.getElementById("heading1").innerText = decodeURIComponent(name);
                document.getElementById("heading2").innerText = "-by " + decodeURIComponent(name);
            }
        }

        // Update the heading when the page loads
     window.onload = updateHeading;
        
        