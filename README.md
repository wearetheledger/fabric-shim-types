# fabric-shim-types
## Version matching
| Fabric        | Shim types    |
| ------------- |:-------------:|
| v1.2.X     | v2.0.X |
| V1.1.X     | v1.0.6     |

## How to add this type to your project
You can add these types to your project by appending it to your types in your `tsconfig.json`

```
{
  "compilerOptions": {
    ... // include other options
    "types": [
      "@theledger/fabric-shim-types"
    ]
  }
}
```
