# regex-matcher

This GitHub action matches a string against a regex pattern and outputs its matches according to the JavaScript `match` function.

## Inputs

### `regex_pattern`

**Required** The regex pattern to test with. (e.g. **"^Hello (.*)$"**)

### `regex_flags`

**Optional** The regex flags (e.g. **"gi"**)

### `search_string`

**Required** The string to test against (e.g. **"Hello World"**)

## Outputs

### `matches`

The matches of the string against the regex pattern. (e.g. **["Hello World", "World"]**)

## Example usage

    - name: Who to greet?
        id: who_to_greet
        uses: michielkempen/regex-matcher@v1
        with:
            regex_pattern: '^Hello (.*)$'
            search_string: 'Hello World'
    - name: Greeting
        run: echo "Hello ${{ steps.who_to_greet.outputs.matches[1] }}"