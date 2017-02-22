# usage be rake new_kata["classification","title"]
desc "Begin a new kata"
task :new_kata, [:dir, :title] do |t, args|
  directory = (args.dir || get_stdin("Enter a classification: ")).gsub(/\s+|\//, '-')
  title = (args.title || get_stdin("Enter a title: ")).gsub(' ', '-')
  filename = "./#{directory}/#{Time.now.strftime('%y%m%d')}-#{title}.js"

  Dir.mkdir directory unless Dir.exists?(directory)

  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new file: #{filename}"
  open(filename, 'w') do |post|
    post.puts "/* #{filename}\n\n"
    post.puts "*/\n\n"
    post.puts "// TESTS ********"
    post.puts "var assert = require('assert')"
  end
end

def get_stdin(message)
  puts message
  STDIN.gets.chomp
end
