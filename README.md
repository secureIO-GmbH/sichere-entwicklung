# Sichere Entwicklung

Dieses Repo enthält alle Dateien der Website https://sichere-entwicklung.de. Wir verwenden[Jekyll](https://jekyllrb.com/).

## Jekyll lokal starten

Ruby muss installiert sein: https://www.ruby-lang.org/de/

```
# For me there are currently problems using Version 3.3.4. It's recommended to use 3.2.3 instead. Best use rbenv therefore...
# On MAC: 
$ brew install rbenv ruby-build
$ rbenv install 3.2.3

# Also had problems that Mac did not include ruby inside ~/.bash_profile correctly 
$ rbenv local 3.2.3 # Alternatively also global if you want to
$ ruby -v # Should be your new installed version, not the old 2.6.... internal MAC used ruby version
# If not, you can manually add the profile:
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

```
$ gem install jekyll bundler
$ bundle install # Bundler 2.3.14 is used
$ bundle exec jekyll serves

# build only
$ bundle exec jekyll build
```


```
Error (solved ?):
To be checked @Michael Wager:s
Had problem that webrick was not loaded inside bundle install automatically, so I included it inside the GemFile- is this correct (?)
$ Installed it with:
$ bundle add webrick
```

