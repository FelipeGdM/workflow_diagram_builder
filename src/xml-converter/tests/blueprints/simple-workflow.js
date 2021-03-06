module.exports = {
  "name": "SIMPLE_WORKFLOW",
  "description": "Simple workflow used to validation",
  "blueprint_spec": {
    "nodes": [
      {
        "id": "1",
        "name": "Start node",
        "next": "2",
        "type": "Start",
        "lane_id": "99",
        "parameters": {
          "input_schema": {}
        }
      },
      {
        "id": "2",
        "name": "Set to bag node",
        "next": "99",
        "type": "SystemTask",
        "lane_id": "99",
        "category": "setToBag",
        "parameters": {
          "input": {
            "creatorId": {
              "$ref": "actor_data.actor_id"
            }
          }
        }
      },
      {
        "id": "99",
        "name": "Finish node",
        "type": "Finish",
        "lane_id": "99",
        "parameters": {
          "input_schema": {}
        }
      }
    ],
    "lanes": [
      {
        "id": "99",
        "name": "everyone",
        "rule": [
          "fn",
          [
            "&",
            "args"
          ],
          true
        ]
      }
    ]
  }
}