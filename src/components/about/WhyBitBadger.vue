<template lang="pug">
article.content.auto
  page-title(title='Why Bit Badger?')
  h1 Why &ldquo;Bit Badger&rdquo;?
  p.
    A while back, our primary developer Daniel learned through genetic testing that he had one gene that was not right
    (technically known as a genetic mutation). He is currently fine #[em (thank you for asking)], but his co-workers
    thought of another group of genetic mutants &ndash; the X-Men. They wanted to develop the mutant identity for him
    in that style; since Wolverine is already taken, they wanted something similar, but based on a member of the weasel
    family (for its normal private life and fierce tenacity, not its morals). They went through several different
    options, but when &ldquo;Bit Badger&rdquo; was mentioned, it was the winner. The Bit Badger's mutant superpower is
    the ability to shoot 1s and 0s out its nostrils!
  p.
    Daniel liked this moniker, and decided to run with it. He had been growing dissatisfied with the name &ldquo;DJS
    Consulting,&rdquo; as he felt that name was passive. He enjoys taking problems and finding creative solutions for
    them, making our computers work for us instead of the other way around. While he can't actually breathe out 1s and
    0s, they do flow from his fingers (in groups of 8, of course).
  p.
    Do you have a problem that needs a solution? #[a(href='mailto:daniel@bitbadger.solutions') Sic the Bit Badger on it]!
  p
    br
    router-link(to='/' title='Home') &laquo; Home
</template>

<script>
export default {
  name: 'why-bit-badger'
}
</script>
