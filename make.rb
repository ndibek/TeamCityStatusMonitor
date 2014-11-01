require "zip"

FileUtils.rm_rf "TeamCityStatusMonitor.zip"
FileUtils.rm_rf "temp"
FileUtils.mkdir "temp"

FileUtils.cp_r "css", "temp\\css\\"
FileUtils.cp_r "vendor", "temp\\vendor\\"
FileUtils.cp_r "html", "temp\\html\\"
FileUtils.cp_r "icon", "temp\\icon\\"
FileUtils.cp_r "manifest.json", "temp\\"

Zip::File.open("TeamCityStatusMonitor.zip", Zip::File::CREATE) do |zipfile|
  zipfile.add "css", "temp\\css\\"
  zipfile.add "vendor", "temp\\vendor\\"
  zipfile.add "html", "temp\\html\\"
  zipfile.add "icon", "temp\\icon\\"
  zipfile.add "manifest.json", "temp\\manifest.json"
end

FileUtils.rm_rf "temp"