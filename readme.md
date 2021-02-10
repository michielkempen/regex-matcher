# regex-matcher

This GitHub action matches a string against a regex pattern and outputs its first capture group, if any.

## Inputs

### `regex_pattern`

**Required** The regex pattern to test with. (e.g. **"^Hello (.*)$"**)

### `regex_flags`

**Optional** The regex flags (e.g. **"gi"**)

### `search_string`

**Required** The string to test against (e.g. **"Hello World"**)

## Outputs

### `match`

The first capture group of the string matched against the regex pattern. (e.g. **"World"**)

## Example usage

    - name: Who to greet?
        id: who_to_greet
        uses: michielkempen/regex-matcher@v1
        with:
            regex_pattern: '^Hello (.*)$'
            search_string: 'Hello World'
    - name: Greeting
        run: echo "Hello ${{ steps.who_to_greet.outputs.match }}"