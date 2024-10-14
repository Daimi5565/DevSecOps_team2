pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = 'saad5565' // Your Docker Hub username
        DOCKER_HUB_PASSWORD = credentials('docker-hub-credentials') // Use the ID you set for Docker Hub credentials
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // Login to Docker Hub
                    sh 'echo $DOCKER_HUB_PASSWORD | docker login -u $DOCKER_HUB_USERNAME --password-stdin'
                    
                    // Pull the image from Docker Hub
                    sh 'docker pull saad5565/my-test-app:latest'
                }
            }
        }
        // Add your other stages (e.g., Trivy Scan) here
    }
}
