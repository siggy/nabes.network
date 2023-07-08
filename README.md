# nabes.network

Map similar neighborhoods between cities.

## Local dev

```
python3 -m http.server
```

## ChatGPT

```json
[
  Auckland, Austin, Barcelona, Berlin, Bristol, Copenhagen, Denver, Edinborough,
  Helsinki, Ho Chi Minh City, Hong Kong, Lisbon, Los Angeles, London, Madrid,
  Mexico City, Mumbai, New York City, Paris, Portland, Rio de Janeiro,
  San Francisco, Seattle, Seoul, Sydney, Taipei, Tokyo
]
```

ChatGPT4 prompt to generate data:

Map as many Barcelona Neighborhoods to San Francisco neighborhoods as possible, based on culture, demographics, and economics. Output the response in the following JSON format:
```
{
  "cities": ["Barcelona", "San Francisco"],
  "neighborhoods": [
    {
      "Barcelona": "Eixample",
      "San Francisco": "SoMa",
      "Description": "Both neighborhoods are characterized by their grid-like street layouts and mix of residential and commercial properties."
    }
  ]
}
```
Also, do not include the city name in the output. For example, "Red Hook", not "Red Hook, Brooklyn, NYC".


## List models

```bash
curl -s https://api.openai.com/v1/models   -H "Authorization: Bearer $OPENAI_API_KEY" |
  jq -r .data[].id |
  sort
```
