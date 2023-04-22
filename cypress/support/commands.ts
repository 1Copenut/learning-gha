// Libs
import "cypress-axe";

// Custom commands
import { runAxe } from "./a11y/runAxe";

Cypress.Commands.add("runAxe", runAxe);
