# ShopFlow Order Processing System

## Project Overview
This project demonstrates a serverless, event-driven Azure solution for order processing. The system receives an HTTP order request through an Azure Function, places the message into an Azure Service Bus queue, and uses an Azure Logic App to trigger automated workflow processing.

## Azure Services Used
- Azure Function App
- Azure Service Bus
- Azure Logic App
- Azure Storage Account

## Intended Architecture
The original design intended to also include:
- Azure Cosmos DB
- API Management

Due to lab policy restrictions, Cosmos DB could not be fully implemented. The architecture was adapted while still preserving the core event-driven workflow.

## Final Workflow
1. Azure Function receives HTTP request  
2. Order is validated  
3. Message is sent to Service Bus queue  
4. Logic App listens to queue  
5. Workflow runs automatically  

## Architecture Diagram
![Architecture Diagram](architecture%20diagram.png)
## Demo Evidence
- Function returned 200 OK  
- Service Bus received message  
- Logic App triggered successfully  
- Cosmos DB showed policy restriction  

## Challenges
Cosmos DB creation was disallowed by policy in the lab environment. The architecture was adapted to ensure the system still functioned.

## Outcome
The final solution demonstrates a working serverless Azure architecture for automated order processing.
