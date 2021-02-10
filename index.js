const core = require('@actions/core');

try {
    
    const regexPattern = core.getInput('regex_pattern');
    const regexFlags = core.getInput('regex_flags');
    const searchString = core.getInput('search_string');

    if (! regexPattern) {
        core.setFailed('regex_pattern input is required');
        return;
    }

    if (! searchString) {
        core.setFailed('search_string input is required');
        return;
    }

    const regex = new RegExp(regexPattern, regexFlags);

    const matches = searchString.match(regex);

    if (! matches) {
        console.log('Could not find any matches');
        return;
    }

    core.setOutput('matches', matches[1]);

} catch (error) {
    core.setFailed(error.message);
}