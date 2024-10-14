pipeline {
    agent any

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // Pull the image from local Docker (since it's already running on your system)
                    sh 'docker pull my-test-app'
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                script {
                    // Scan the Docker image using Trivy
                    sh 'trivy image my-test-app'
                }
            }
        }
    }
}

