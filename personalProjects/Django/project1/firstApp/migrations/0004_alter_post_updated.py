# Generated by Django 4.1.5 on 2023-01-15 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstApp', '0003_post_remove_webpage_topic_delete_accessrecord_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='updated',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]