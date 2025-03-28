require 'fileutils'

def generate_mermaid(directory, level = 0)
  output = []
  links = []

  # Füge den aktuellen Ordner zur Ausgabe hinzu
  folder_name = File.basename(directory)
  output << "#{folder_name}[#{folder_name}]"
  
  # Durchlaufe die Inhalte des Verzeichnisses
  Dir.entries(directory).each do |entry|
    next if entry == '.' || entry == '..' || entry == 'index.md' # Überspringe 'index.md'

    path = File.join(directory, entry)
    if File.directory?(path)
      # Füge einen Link zu diesem Ordner hinzu
      links << "#{folder_name} --> #{entry}[#{entry}]"
      # Rekursiver Aufruf für Unterverzeichnisse
      output.concat(generate_mermaid(path, level + 1))
      
      # Generiere das Klick-Event für den Ordner
      links << "click #{entry} \"#{entry.downcase}\""
    else
      # Füge Dateien als Knoten hinzu
      links << "#{folder_name} --> #{entry}[#{entry}]"
    end
  end

  links.concat(output)
  links
end

# Verzeichnis angeben (z. B. "docs" oder dein spezifisches Verzeichnis)
directory_path = File.expand_path("../../../pages/bereitstellung", __FILE__)
mermaid_output = generate_mermaid(directory_path)

# Mermaid-Code ausgeben
puts "graph TD"
puts mermaid_output.join("\n")