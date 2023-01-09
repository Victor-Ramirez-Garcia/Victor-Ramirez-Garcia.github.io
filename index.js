// Set main collapsible button class names
let main_collapsible_button_class = "main-collapsible-button";
let main_collapsible_button_active_class = "main-collapsible-button-active";
let main_collapsible_button_content_class = "main-collapsible-button-content";
let main_collapsible_button_content_active_class = "main-collapsible-button-content-active";

// Set profile collapsible button class names
let profile_collapsible_button_class = "profile-collapsible-button";
let profile_collapsible_button_active_class = "profile-collapsible-button-active";
let profile_collapsible_button_content_class = "profile-collapsible-button-content";
let profile_collapsible_button_content_active_class = "profile-collapsible-button-content-active";

// Get object of collapsible button elements by class name
let main_collapsible_button = document.getElementsByClassName(main_collapsible_button_class);
let profile_collapsible_button = document.getElementsByClassName(profile_collapsible_button_class)


// Creates and returns an array of button objects
function button_objects(collapsible_button) {
    let new_button = [];

    // For every collapsible button element, create a button object for that element and append it to 'new_button':
    for (let i = 0; i < collapsible_button.length; i++) {
        // Set variables 'button' and 'content' for the button and content elements
        let button = collapsible_button[i];
        let content = collapsible_button[i].nextElementSibling;

        // Create a button object of that button element
        let button_object = {
            // Removes the 'active' class of its button and content element
            remove_button_and_content: () => {
                if (button.className.startsWith(main_collapsible_button_class) && content.className.startsWith(main_collapsible_button_content_class)) {
                    button.classList.remove(main_collapsible_button_active_class);
                    content.classList.remove(main_collapsible_button_content_active_class);
                } else {
                    button.classList.remove(profile_collapsible_button_active_class);
                    content.classList.remove(profile_collapsible_button_content_active_class);
                }
            },
            // Toggles the 'active' class of its button and content element
            toggle_button_and_content: () => {
                if (button.className.startsWith(main_collapsible_button_class) && content.className.startsWith(main_collapsible_button_content_class)) {
                    button.classList.toggle(main_collapsible_button_active_class);
                    content.classList.toggle(main_collapsible_button_content_active_class);
                } else {
                    button.classList.toggle(profile_collapsible_button_active_class);
                    content.classList.toggle(profile_collapsible_button_content_active_class);
                }
            }
        }

        // Appends new object to new_button
        new_button.push(button_object);
    }

    return new_button
}

let main_button = button_objects(main_collapsible_button);
let profile_button = button_objects(profile_collapsible_button);

// Add's the functionality of a collapsible button
function collapsible_button_functionality(collapsible_button) {
    // For every collapsible button element, add a 'click' event listener 
    // with its collapsible button functionality
    for (let i = 0; i < collapsible_button.length; i++) {
        collapsible_button[i].addEventListener('click', () => {
            // Check what class name does the button have
            if (collapsible_button[i].className.startsWith(main_collapsible_button_class)) {
                // Check which button element is being clicked and add its button functionality
                if (i === 0) {
                    main_button[1].remove_button_and_content();
                    profile_button[0].remove_button_and_content();
                    profile_button[1].remove_button_and_content();
                    profile_button[2].remove_button_and_content();
                    profile_button[3].remove_button_and_content();

                    main_button[0].toggle_button_and_content();
                } else {
                    main_button[0].remove_button_and_content();
                    profile_button[0].remove_button_and_content();
                    profile_button[1].remove_button_and_content();
                    profile_button[2].remove_button_and_content();
                    profile_button[3].remove_button_and_content();
                    
                    main_button[1].toggle_button_and_content();
                }
            } else {
                // Check what button element is being clicked and add its button functionality
                if (i === 0) {
                    profile_button[1].remove_button_and_content();
                    profile_button[2].remove_button_and_content();
                    profile_button[3].remove_button_and_content();
                    
                    profile_button[0].toggle_button_and_content();
                } else if (i === 1) {
                    profile_button[0].remove_button_and_content();
                    profile_button[2].remove_button_and_content();
                    profile_button[3].remove_button_and_content();
                    
                    profile_button[1].toggle_button_and_content();
                } else if (i === 2) {
                    profile_button[0].remove_button_and_content();
                    profile_button[1].remove_button_and_content();
                    profile_button[3].remove_button_and_content();
                    
                    profile_button[2].toggle_button_and_content();
                } else {
                    profile_button[0].remove_button_and_content();
                    profile_button[1].remove_button_and_content();
                    profile_button[2].remove_button_and_content();
                    
                    profile_button[3].toggle_button_and_content();
                }
            }
        })
    }
    
}

main_button[0].toggle_button_and_content();
profile_button[3].toggle_button_and_content();
collapsible_button_functionality(main_collapsible_button);
collapsible_button_functionality(profile_collapsible_button);