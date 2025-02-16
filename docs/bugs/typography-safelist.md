# Typography Safelist Issue

## Problem

Tailwind v4 has removed the `safelist` feature, which was previously used to ensure certain utility classes were always included in the production build. This particularly affects our typography component's responsive variants.

## Current Workaround

We've implemented a manual solution in `typography.utils.ts` by explicitly defining all typography variants for each breakpoint (xs through lg) in the CVA variants object. This ensures these classes are always available in the build.

## Impact

- Increased bundle size due to including all possible typography variants (27.1kb to 27.7kb)
- More verbose variant definitions in the utils file
- Manual maintenance required when adding new typography variants

## Future Considerations

- No need mostly, not much increase in bundle size (0.6kb only)
- Monitor Tailwind updates for potential reintroduction of safelist feature
- Explore alternative solutions that don't require manual variant definitions
- Consider build-time analysis tools to automatically detect and include used variants

## Related Files

- `common/components/ds/Typography/typography.utils.ts`
