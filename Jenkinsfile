pipeline {
  agent any
  tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
      stage('Test') {
                    steps {
                        echo 'test started'
                        bat 'npm run test'
                        echo 'test ended'
                    }
                }
      stage('Sonarqube'){
        steps{
          bat 'sonar-scanner'
        }
      }
    }
  post {
        success {
           emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
      }
    failure {
        mail to: 'rushabhmukkirwar@gmail.com',
            subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
            body: "Build failed for the pipeline: ${env.BUILD_URL}"
    }
    }
}
