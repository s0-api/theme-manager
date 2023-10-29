class ThemeManager {
    constructor() {
        this.ThemeMap = window["TEMPLATE-API"].ThemeMap;
    }

    addTheme(TEXTName) {
        if (!TEXTName || typeof TEXTName !== 'string') {
            throw new Error("An Error Occurred\nExpected Guide: TEXTName must be defined and of type string");
        }
        // Create a new theme with an empty object for CSS rules
        this.ThemeMap.push({
            name: TEXTName, rules: {}
        });
    }

    removeTheme(TEXTName) {
        if (!TEXTName || typeof TEXTName !== 'string') {
            throw new Error("An Error Occurred\nExpected Guide: TEXTName must be defined and of type string");
        }

        // Find and remove the theme by name
        let found = false;
        this.ThemeMap.forEach((theme, index) => {
            if (theme.name === TEXTName) {
                this.ThemeMap.splice(index, 1);
                found = true;
            }
        });

        if (!found) {
            throw new Error("An Error Occurred !\n"+"Suggested: No Theme with the name " + TEXTName + " found in ThemeMap");
        }
    }

    createRule(TEXTName, MAPCSSRules) {
        if (!this.ThemeMap.some(theme => theme.name === TEXTName)) {
            throw new Error("Suggested: No Theme with the name " + TEXTName + " found in ThemeMap");
        }

        // Assign CSS rules to the specified theme
        this.ThemeMap.find(theme => theme.name === TEXTName).rules = MAPCSSRules;
    }
    clearRule(TEXTName) {
        if (!this.ThemeMap.some(theme => theme.name === TEXTName)) {
            throw new Error("Expected Guide: Any Theme with the name " + TEXTName + " cannot be found");
        }

        // Clear CSS rules for the specified theme
        this.ThemeMap.find(theme => theme.name === TEXTName).rules = {};
    }
}
Object.assign(window["TEMPLATE-API"],{
        "ThemeMap": []});