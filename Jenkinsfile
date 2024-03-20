pipeline {
  agent any
  stages {
    // Извлекаем проект из Bitbucket 
    stage('Install') {
      sh 'npm install'
    }
    // Собираем проект. Получаем на выходе пакетный файл AUDIT_Import_ALL.ispac 
    stage('Build') {
      sh 'npm run build'
    }
    // Загружаем архив с проектом на удаленный сервер. Деплоим его на MS SQL Server 
    stage('Deploy') {
      sh 'npm run start - p 3000'
    }
}
}
